import { AnimationArrayType } from "@/lib/types";

export function runSelectionSort(array: number[], animations: AnimationArrayType) {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            animations.push([[i, j], false]);
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        animations.push([[i, array[minIndex]], true]);
        animations.push([[minIndex, array[i]], true]);
        let temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
    }
}

export function generateSelectionSortAnimations(
    isSorting: boolean,
    array: number[],
    runAnimation: (animations: AnimationArrayType) => void
) {
    if (isSorting) return;
    if (array.length <= 1) return [];

    const animations: AnimationArrayType = [];
    const auxiliaryArray = array.slice();
    runSelectionSort(auxiliaryArray, animations);
    runAnimation(animations);
}