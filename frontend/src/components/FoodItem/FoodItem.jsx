import React from 'react';

const FoodItem = ({ item, onClick }) => {
  const getLargestWeight = () => {
    if (!item.weights || item.weights.length === 0) return null;
    return item.weights.reduce((largest, current) => 
      current.price > largest.price ? current : largest
    );
  };

  const largestWeight = getLargestWeight();

  return (
    <div onClick={onClick} className='bg-white rounded-lg overflow-hidden w-[156px] md:w-[218px] h-auto flex flex-col gap-auto cursor-pointer mb-5'>
      <div className='relative'>
        <img className='w-[156px] md:w-[180px] lg:w-[218px] h-[167px] md:h-[217px] object-cover rounded-lg' src={item.image} alt='Food item' />
        <span className='absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded'>
          75% OFF
        </span>
      </div>
      <div className='mt-3'>
        <p className='font-Nunito font-bold text-[14px] md:text-[14px] lg:text-[16px] truncate'>{item.name}</p>
        <p className='font-Nunito text-[#909090] text-[12px] md:text-[12px] lg:text-sm overflow-hidden line-clamp-1 mb-2'>
          {item.description}
        </p>
        {largestWeight && (
          <p className='flex flex-col md:flex-row md:gap-2 font-Nunito font-bold text-[11px] md:text-[12px] lg:text-sm text-[#606060] mb-[0px]'>
            ₹{largestWeight.price} / {largestWeight.weight}
            <span>
              <p className='text-[#26A460] text-[12px] md:text-[13px] lg:text-[15px]'>
                with offer {item.offer}
              </p>
            </span>
          </p>
        )}
        <button className='flex gap-2 items-center justify-center font-Nunito mt-2 bg-[#E9DEC6] text-black font-bold text-[12px] md:text-[14px] py-3 px-4 rounded-lg w-[156px] h-[32px] md:w-[198.17px] md:h-[40px]'>
          <span><img src='Cart.svg' loading='lazy' className='h-20px w-20px md:h-[24px] md:w-[24px]' alt="Cart"></img></span> Add to cart 
        </button>
      </div>
    </div>
  );
};

export default FoodItem;