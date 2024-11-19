# Mergesort

"I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice." 

Used prior approved work from: https://github.com/COSC3020/mergesort-Powerfuljackell-1

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

Since this is still taking the same actions, the complexity is very similar. However, due to the inplace nature of mergeInPlace the complexity of this increases to $\Theta(n^2)$ as it loops through each value within the given section of the overall array, increasing the worst case (see code comment). Due to this we can determine that the runtime is $\Theta(n^2logn)$.