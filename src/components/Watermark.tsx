import type { FunctionComponent } from 'react';

export interface WatermarkProps {
  currentYear: number;
}

export const Watermark: FunctionComponent<WatermarkProps> = ({
  currentYear,
}) => {
  return (
    <>
      <p className='inline-flex flex-col items-end'>
        <span className='text-3xl font-semibold text-indigo-700'>
          jhonnymoreira
        </span>
        <span className='text-md inline-flex items-center font-mono leading-relaxed'>
          <span className='mr-1'>{'///////'}</span>
          <span className='text-indigo-400'>{currentYear}</span>
        </span>
      </p>
    </>
  );
};
