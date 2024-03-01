import { AnimationArrayType } from "@/lib/types";

export function runBubbleSort(array: number[], animations: AnimationArrayType) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            animations.push([[j, j + 1], false]);
            if (array[j] > array[j + 1]) {
                animations.push([[j, array[j + 1]], true]);
                animations.push([[j + 1, array[j]], true]);
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}

export function generateBubbleSortAnimations(
    isSorting: boolean,
    array: number[],
    runAnimation: (animations: AnimationArrayType) => void
) {
    if (isSorting) return;
    if (array.length <= 1) return [];

    const animations: AnimationArrayType = [];
    const auxiliaryArray = array.slice();
    runBubbleSort(auxiliaryArray, animations);
    runAnimation(animations);
}
