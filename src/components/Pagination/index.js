import { useMediaQuery } from 'react-responsive';
import { Button, ButtonSpan, PageCounter, StyledVector, Wrapper } from "./styled";

export const Pagination = ({ page, onPageChange }) => {
  const isMobile = useMediaQuery({ maxWidth: 900 });

  const totalPageCount = 500;

  const handleFirstPageClick = () => {
    onPageChange(1);
  };

  const handlePreviousPageClick = () => {
    if (page > 1) {
      onPageChange(page - 1);
    }
  };

  const handleNextPageClick = () => {
    if (page < totalPageCount) {
      onPageChange(page + 1);
    }
  };

  const handleLastPageClick = () => {
    onPageChange(500);
  };

  return (
    <Wrapper>
      <Button
        onClick={handleFirstPageClick}
        disabled={page === 1}>
        <StyledVector />
        <ButtonSpan>First</ButtonSpan>
        {isMobile && <StyledVector />}
      </Button>
      <Button
        onClick={handlePreviousPageClick}
        disabled={page === 1}>
        <StyledVector />
        <ButtonSpan>Previous</ButtonSpan>
      </Button>
      <PageCounter>
        Page <strong>{page}</strong> of <strong>500</strong>
      </PageCounter>
      <Button
        onClick={handleNextPageClick}
        disabled={page === totalPageCount}>
        <ButtonSpan>Next</ButtonSpan>
        <StyledVector reversed />
      </Button>
      <Button
        onClick={handleLastPageClick}
        disabled={page === totalPageCount}>
        <ButtonSpan>Last</ButtonSpan>
        {isMobile && <StyledVector reversed />}
        <StyledVector reversed />
      </Button>
    </Wrapper>
  );
};