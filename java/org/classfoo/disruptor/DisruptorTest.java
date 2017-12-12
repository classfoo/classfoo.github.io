package org.classfoo.disruptor;

import com.lmax.disruptor.BatchEventProcessor;
import com.lmax.disruptor.EventFactory;
import com.lmax.disruptor.EventHandler;
import com.lmax.disruptor.RingBuffer;
import com.lmax.disruptor.Sequence;
import com.lmax.disruptor.SequenceBarrier;
import com.lmax.disruptor.YieldingWaitStrategy;
import com.lmax.disruptor.dsl.ProducerType;

public class DisruptorTest {

	public static final void main(String[] args) {
		YieldingWaitStrategy waitStrategy = new YieldingWaitStrategy();
		RingBuffer<Data> buffer = RingBuffer.create(ProducerType.MULTI, new EventFactory<Data>() {
			@Override
			public Data newInstance() {
				return null;
			}

		}, 1024 * 1024, waitStrategy);
		Sequence seq = new Sequence();
		SequenceBarrier seqBarrier = buffer.newBarrier(seq);
		BatchEventProcessor processor = new BatchEventProcessor(buffer, seqBarrier, new EventHandler<Data>() {

			@Override
			public void onEvent(Data event, long sequence, boolean endOfBatch) throws Exception {

			}

		});
		
	}
}

class Data {

}