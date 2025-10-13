<template>
    <div ref="containerRef" :class="cn('w-full h-full', props.class)">
        <canvas
            ref="canvasRef"
            class="pointer-events-none"
            :width="canvasSize.width"
            :height="canvasSize.height"
        />
    </div>
</template>

<script lang="ts" setup>
import { cn } from "@/lib/utils";
import { ref, onMounted, onBeforeUnmount, toRefs, computed } from "vue";

interface FlickeringGridProps {
    squareSize?: number;
    gridGap?: number;
    flickerChance?: number;
    color?: string;
    width?: number;
    height?: number;
    class?: string;
    maxOpacity?: number;
}

const props = withDefaults(defineProps<FlickeringGridProps>(), {
    squareSize: 4,
    gridGap: 6,
    flickerChance: 0.3,
    color: "rgb(0, 0, 0)",
    maxOpacity: 0.3,
});

const { squareSize, gridGap, flickerChance, color, maxOpacity, width, height } =
    toRefs(props);

const containerRef = ref<HTMLDivElement>();
const canvasRef = ref<HTMLCanvasElement>();
const context = ref<CanvasRenderingContext2D>();

const isInView = ref(false);
const canvasSize = ref({ width: 0, height: 0 });

// --- palette: read some CSS vars and append a green ---
function readPaletteFromTheme(): string[] {
    const root = document.documentElement;
    const style = getComputedStyle(root);

    const candidates = [
        "--color-primary",
        "--color-accent",
        "--color-chart-1",
        "--color-chart-2",
        "--color-chart-3",
        "--color-chart-4",
        "--color-chart-5",
    ];

    const p: string[] = [];
    for (const v of candidates) {
        const val = style.getPropertyValue(v).trim();
        if (val) p.push(val);
    }

    // fallback candidate names if nothing found
    if (p.length === 0) {
        const fallbacks = [
            "--tw-ring-color",
            "--tw-prose-body",
            "--color-primary",
        ];
        for (const f of fallbacks) {
            const val = style.getPropertyValue(f).trim();
            if (val) p.push(val);
        }
    }

    // always add a lime/green tint
    p.push("#A3E635"); // Tailwind lime-400

    // final fallback
    if (p.length === 0) p.push("#A3E635");

    return p;
}

let palette: string[] = [];

// --- grid setup now also returns color indices ---
function setupCanvas(
    canvas: HTMLCanvasElement,
    width: number,
    height: number,
): {
    cols: number;
    rows: number;
    squares: Float32Array;
    colorIndices: Uint8Array;
    dpr: number;
} {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const cols = Math.max(
        1,
        Math.floor(width / (squareSize.value + gridGap.value)),
    );
    const rows = Math.max(
        1,
        Math.floor(height / (squareSize.value + gridGap.value)),
    );

    const len = cols * rows;
    const squares = new Float32Array(len);
    const colorIndices = new Uint8Array(len);

    for (let i = 0; i < len; i++) {
        squares[i] = Math.random() * maxOpacity.value;
        colorIndices[i] = Math.floor(
            Math.random() * Math.max(1, palette.length),
        );
    }
    return { cols, rows, squares, colorIndices, dpr };
}

function updateSquares(
    squares: Float32Array,
    colorIndices: Uint8Array,
    deltaTime: number,
) {
    for (let i = 0; i < squares.length; i++) {
        if (Math.random() < flickerChance.value * deltaTime) {
            squares[i] = Math.random() * maxOpacity.value;
            // small chance to change color when it flickers
            if (Math.random() < 0.2) {
                colorIndices[i] = Math.floor(Math.random() * palette.length);
            }
        }
    }
}

function drawGrid(
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    cols: number,
    rows: number,
    squares: Float32Array,
    colorIndices: Uint8Array,
) {
    // drawing in CSS pixels (we set ctx.setTransform to map device pixels)
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "transparent";
    ctx.fillRect(0, 0, width, height);

    const step = squareSize.value + gridGap.value;
    const size = squareSize.value;

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            const idx = i * rows + j;
            const opacity = squares[idx] ?? 0;
            const colorIdx = colorIndices[idx] ?? 0;
            const fill = palette[colorIdx % palette.length] ?? palette[0];

            ctx.globalAlpha = opacity;
            ctx.fillStyle = fill;
            ctx.fillRect(i * step, j * step, size, size);
        }
    }
    ctx.globalAlpha = 1;
}

const gridParams = ref<
    | (ReturnType<typeof setupCanvas> & {
          // typed as union so TS is happy in other places
      })
    | undefined
>();

function updateCanvasSize() {
    const newWidth = width.value || containerRef.value!.clientWidth;
    const newHeight = height.value || containerRef.value!.clientHeight;

    canvasSize.value = { width: newWidth, height: newHeight };
    gridParams.value = setupCanvas(canvasRef.value!, newWidth, newHeight);

    // ensure we draw in CSS pixels (map device pixels to CSS pixels)
    if (context.value && gridParams.value) {
        context.value.setTransform(
            gridParams.value.dpr,
            0,
            0,
            gridParams.value.dpr,
            0,
            0,
        );
    }
}

let animationFrameId: number | undefined;
let resizeObserver: ResizeObserver | undefined;
let intersectionObserver: IntersectionObserver | undefined;
let lastTime = 0;

function animate(time: number) {
    if (!isInView.value) return;

    const deltaTime = lastTime ? (time - lastTime) / 1000 : 0.016;
    lastTime = time;

    if (gridParams.value) {
        updateSquares(
            gridParams.value.squares,
            gridParams.value.colorIndices,
            deltaTime,
        );
        drawGrid(
            context.value!,
            canvasSize.value.width,
            canvasSize.value.height,
            gridParams.value.cols,
            gridParams.value.rows,
            gridParams.value.squares,
            gridParams.value.colorIndices,
        );
    }

    animationFrameId = requestAnimationFrame(animate);
}

onMounted(() => {
    if (!canvasRef.value || !containerRef.value) return;
    context.value = canvasRef.value.getContext("2d")!;
    if (!context.value) return;

    // read palette only on client
    palette = readPaletteFromTheme();

    updateCanvasSize();

    resizeObserver = new ResizeObserver(() => {
        // refresh palette too — e.g. if theme toggled
        palette = readPaletteFromTheme();
        updateCanvasSize();
    });
    intersectionObserver = new IntersectionObserver(
        ([entry]) => {
            isInView.value = entry.isIntersecting;
            // start animation when visible
            if (isInView.value) {
                lastTime = 0;
                animationFrameId = requestAnimationFrame(animate);
            } else if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
                animationFrameId = undefined;
            }
        },
        { threshold: 0 },
    );

    resizeObserver.observe(containerRef.value);
    intersectionObserver.observe(canvasRef.value);
});

onBeforeUnmount(() => {
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
    }
    resizeObserver?.disconnect();
    intersectionObserver?.disconnect();
});
</script>
