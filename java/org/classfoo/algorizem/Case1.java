package org.classfoo.algorizem;

import junit.framework.Assert;

/**
 * 输入一个整形数组，数组里有正数也有负数。
 * 数组中连续的一个或多个整数组成一个子数组，每个子数组都有一个和。
 * 求所有子数组的和的最大值。要求时间复杂度为O(n)。
 * 例如输入的数组为1, -2, 3, 10, -4, 7, 2, -5，和最大的子数组为3, 10, -4, 7, 2，
 * 因此输出为该子数组的和18。
 * <p>Copyright: Copyright (c) 2017</p>
 * <p>succez</p>
 * @author ClassFoo
 * @createdate 2017年11月23日
 */
public class Case1 {

	public static void main(String[] args) {
		int[] input = new int[] { 1, -2, 3, 10, -4, 7, 2, -5 };
		Case1 case1 = new Case1();
		int max = case1.getMaxSum(input);
		System.out.println(max);
	}

	private int getMaxSum(int[] input) {
		int current = 0, max = current;
		for (int i = 0, j = input.length; i < j; i++) {
			int v = input[i];
			current += v;
			if (current < 0) {
				current = 0;
				continue;
			}
			if (current > max) {
				max = current;
			}
		}
		return max;
	}
}
