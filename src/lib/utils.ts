import {
    generateBubbleSortAnimations
} from "@/algorthims/bubbleSort";
import {
    generateSelectionSortAnimations
} from "@/algorthims/selectionSort";

import { SortingAlgorithmType, AnimationArrayType } from "./types";
export const MIN_ANIMATION_SPEED = 10;
export const MAX_ANIMATION_SPEED = 400;

export function generateRandomNumberFromInterval(
    min: number,
    max: number
): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export const algorithmOptions = [
    { label: "Bubble", value: "bubble" },
    { label: "Selection", value: "selection" },
    { label: "Insertion", value: "insertion" },
    { label: "Merge", value: "merge" },
    { label: "Quick", value: "quick" },
    { label: "Heap", value: "heap" },
];

export const generateAnimationArray = (
    selectedAlgorithm: SortingAlgorithmType,
    isSorting: boolean,
    array: number[],
    runAnimation: (animations: AnimationArrayType) => void
) => {
    switch (selectedAlgorithm) {
        case "bubble":
            return generateBubbleSortAnimations(isSorting, array, runAnimation);
        case "selection":
            return generateSelectionSortAnimations(isSorting, array, runAnimation);
        // case "insertion":
        //     return insertionSort(array, runAnimation);
        // case "merge":
        //     return mergeSort(array, runAnimation);
        // case "quick":
        //     return quickSort(array, runAnimation);
        // case "heap":
        //     return heapSort(array, runAnimation);
        default:
            return;
    }
}

export const SortingAlgorithmData = {
    bubble: {
        titile: "Bubble Sort",
        description: "Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.",
        worstCase: "O(n^2)",
        bestCase: "O(n)",
        averageCase: "O(n^2)",
    },
    selection: {
        titile: "Selection Sort",
        description: "The selection sort algorithm sorts an array by repeatedly finding the minimum element from unsorted part and putting it at the beginning.",
        worstCase: "O(n^2)",
        bestCase: "O(n^2)",
        averageCase: "O(n^2)",
    },
    insertion: {
        titile: "Insertion Sort",
        description: "Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time.",
        worstCase: "O(n^2)",
        bestCase: "O(n)",
        averageCase: "O(n^2)",
    },
    merge: {
        titile: "Merge Sort",
        description: "Merge Sort is a Divide and Conquer algorithm. It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves.",
        worstCase: "O(n log n)",
        bestCase: "O(n log n)",
        averageCase: "O(n log n)",
    },
    quick: {
        titile: "Quick Sort",
        description: "QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot.",
        worstCase: "O(n^2)",
        bestCase: "O(n log n)",
        averageCase: "O(n log n)",
    },
    heap: {
        titile: "Heap Sort",
        description: "Heap sort is a comparison based sorting technique based on Binary Heap data structure.",
        worstCase: "O(n log n)",
        bestCase: "O(n log n)",
        averageCase: "O(n log n)",
    },
}