import Image from 'next/image';
import React, { FormEvent, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import CheckIcon from '@/public/icons/CheckIcon.svg';
import RightArrowIcon from '@/public/icons/RightArrow.svg';

const TERMS_TITLES = [
  '만 14세이상 입니다',
  '이용약관',
  '개인정보 수집 및 이용동의',
];

interface CheckedStates {
  [key: string]: boolean;
}

function TermsCheckbox() {
  const { register, setValue } = useFormContext();
  const [checkedStates, setCheckedStates] = useState<CheckedStates>(
    TERMS_TITLES.reduce((acc, title) => ({ ...acc, [title]: false }), {}),
  );

  const handleSelectAll = (e: FormEvent<HTMLInputElement>) => {
    const isChecked = e.currentTarget.checked;
    setCheckedStates(
      TERMS_TITLES.reduce(
        (acc, termsTitle) => ({ ...acc, [termsTitle]: isChecked }),
        {},
      ),
    );
  };

  const handleIndividualCheck = (termsTitle: string) => {
    setCheckedStates((prev) => ({ ...prev, [termsTitle]: !prev[termsTitle] }));
  };

  const handleOpenModal = () => {
    //모달을 열거예용
  };

  useEffect(() => {
    const isAllChecked = Object.values(checkedStates).every(Boolean);
    setValue('selectAll', isAllChecked);
  }, [checkedStates, setValue]);

  return (
    <div className="w-360 mobile:w-330 ">
      <span className="font-bold inline-block pb-8">약관동의</span>
      <div className="h-48 flex items-center border-0 border-b-[1px] border-b-[#DBDBDB] gap-8 relative">
        <label htmlFor="selectAll" className="text-15 font-medium">
          <Image
            src={CheckIcon}
            alt="체크아이콘"
            width={10}
            height={6}
            className="absolute z-10 top-20 left-5"
          />
          <input
            type="checkbox"
            id="selectAll"
            {...register('selectAll')}
            checked={Object.values(checkedStates).every(Boolean)}
            onChange={handleSelectAll}
            className="p-1 relative float-left mr-8 mt-0.5 w-20 h-20 rounded-full
          border-2 border-solid border-gray-3 checked:bg-green checked:border-0
          appearance-none "
          />
          전체 동의
        </label>
      </div>

      <div>
        {TERMS_TITLES.map((termsTitle) => (
          <div
            key={termsTitle}
            className="h-48 flex items-center justify-between">
            <div className="flex items-center relative">
              <label
                htmlFor={`id.${termsTitle}`}
                className="text-[#767676] text-15">
                <Image
                  src={CheckIcon}
                  alt="체크아이콘"
                  width={10}
                  height={6}
                  className="absolute z-10 top-7 left-5"
                />
                <input
                  id={`id.${termsTitle}`}
                  {...register(`id.${termsTitle}`)}
                  type="checkbox"
                  checked={checkedStates[termsTitle]}
                  onChange={() => handleIndividualCheck(termsTitle)}
                  className=" p-1 relative float-left mr-8 mt-0.5 w-20 h-20 rounded-full
                border-2 border-solid border-gray-3 checked:bg-green checked:border-0
                appearance-none "
                />
                {termsTitle}
              </label>
            </div>
            <button className="pr-4" onClick={handleOpenModal}>
              <Image
                src={RightArrowIcon}
                width={18}
                height={18}
                alt="약관내용 전체보기 버튼"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TermsCheckbox;