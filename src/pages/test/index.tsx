import PreviewBookInfo from '@/components/book/previewBookInfo/previewBookInfo';
import ShippingAddressSection from '@/components/container/shippingAddressSection/shippingAddressSection';
import SkeletonPreviewBookImage from '@/components/skeleton/previewBookImage/skeleton';
import { bookOverviewsMock } from '@/pages/api/mock/bestSellerMock';
import { useState } from 'react';
const bookOverviews = bookOverviewsMock;

function TestPage() {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isFindAddressModalOpen, setIsFindAddressModalOpen] = useState(false);
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);
  const [isAddCommunityCardModalOpen, setIsAddCommunityCardModalOpen] =
    useState(false);
  const [isGetRefundFormModalOpen, setIsGetRefundFormModalOpen] =
    useState(false);

  const handleReviewModalOpen = () => {
    setIsReviewModalOpen(!isReviewModalOpen);
  };

  const handleFindAddressModalOpen = () => {
    setIsFindAddressModalOpen(!isFindAddressModalOpen);
  };

  const handleAlertModalOpen = () => {
    setIsAlertModalOpen(!isAlertModalOpen);
  };

  const handleAddCommunityCardModalOpen = () => {
    setIsAddCommunityCardModalOpen(!isAddCommunityCardModalOpen);
  };

  const handleGetRefundFormModalOpen = () => {
    setIsGetRefundFormModalOpen(!isGetRefundFormModalOpen);
  };

  return (
    <div className="flex flex-col gap-20 p-20">
      <PreviewBookInfo
        title="하이용"
        authorList={['얌얌', '능이버섯']}
        image={bookOverviews[0]?.book.bookImgUrl}
        size="sm"
        ranking={100}
        bookId={bookOverviews[0].book.bookId}
        // itemsStart
      />
      <PreviewBookInfo
        title="하이용"
        authorList={['얌얌', '능이버섯']}
        image={bookOverviews[0]?.book.bookImgUrl}
        size="md"
        ranking={1}
        itemsStart
        bookId={bookOverviews[0].book.bookId}
      />
      <PreviewBookInfo
        title="하이용"
        authorList={['얌얌', '능이버섯']}
        image={bookOverviews[0]?.book.bookImgUrl}
        size="lg"
        ranking={10}
        bookId={bookOverviews[0].book.bookId}
        // itemsStart
      />

      <div className="flex gap-10">
        <SkeletonPreviewBookImage size="lg" />
        <SkeletonPreviewBookImage size="md" />
        <SkeletonPreviewBookImage size="sm" />
      </div>
      <ShippingAddressSection />
    </div>
  );
}

export default TestPage;
