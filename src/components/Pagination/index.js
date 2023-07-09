import { Pagination } from ".styled";

export const Pagination = ({ pagination }) => {
  return (
    <>
      {pagination && (
        <div>
          <Pagination>{pagination}</Pagination>
        </div>
      )}
    </>
  );
};
