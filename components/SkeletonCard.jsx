import React from 'react';
import Skeleton from 'react-loading-skeleton';

const SkeletonCard = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((item) => (
      <div className=" rounded-tr-[40px] w-full h-full cursor-pointer relative overflow-hidden">
        <div className="w-full ">
          <Skeleton
            width={260}
            height={400}
            borderRadius="3rem"
            style={{ padding: '50px' }}
          />
          {/* &nbsp;&nbsp; */}
          <div className="mt-4">
            <Skeleton circle width={40} height={40} />
            <Skeleton />
          </div>
        </div>
      </div>
    ));
};
export default SkeletonCard;
