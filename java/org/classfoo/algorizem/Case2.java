package org.classfoo.algorizem;

/**
 * 查找最小K个元素
 * 题目：输入n个整数，输出其中最小的k个。
 * 例如输入1，2，3，4，5，6，7和8这8个数字，则最小的4个数字为1，2，3和4。
 * <p>Copyright: Copyright (c) 2017</p>
 * <p>succez</p>
 * @author ClassFoo
 * @createdate 2017年11月23日
 */
public class Case2 {

	public static void main(String[] args) {
		int[] input = new int[] { 1, -2, 3, 10, -4, 7, 2, -5 };
		Case2 case2 = new Case2();
		int[] max = case2.getMinK(input, 4);
		System.out.println(max);
	}

	private int[] getMinK(int[] input, int k) {
		int current = 0, max = current;
		int[] result = new int[k];
		int kmax = 0;
		for (int i = 0, j = input.length; i < j; i++) {
			if(i < k){
				result[i] = input[i]; 
				continue;
			}
			int v = input[i];
			
		}
		return result;
	}

}
