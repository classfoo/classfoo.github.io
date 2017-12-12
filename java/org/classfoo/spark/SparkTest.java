package org.classfoo.spark;

import org.apache.spark.sql.Dataset;
import org.apache.spark.sql.SparkSession;

public class SparkTest {
	public static void main(String[] args) {
		//		SparkConf conf = new SparkConf().setMaster("spark://ClassFoomatoMacBook-Pro.local:7077").setAppName("HelloSpark");
		//		try (JavaSparkContext jsc = new JavaSparkContext(conf)) {
		//			// do something here  
		//			JavaRDD<Integer> data = jsc.parallelize(Arrays.asList(1, 2, 3, 4, 5));
		//			data.reduce((a, b) -> a + b);
		//		}

		String logFile = "/succez/test/test.csv"; // Should be some file on your system
		SparkSession spark = SparkSession.builder().master("local[3]").appName("Simple Application").getOrCreate();
		Dataset<String> logData = spark.read().textFile(logFile).cache();

		long numAs = logData.filter(s -> s.contains("a")).count();
		long numBs = logData.filter(s -> s.contains("b")).count();

		System.out.println("Lines with a: " + numAs + ", lines with b: " + numBs);

		spark.stop();
	}
}