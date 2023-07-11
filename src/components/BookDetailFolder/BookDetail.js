import { useContext } from "react";
import { BookContext } from "../../BookAppContext";
import { Card, Typography, Skeleton } from "@mui/material";
import styled from "@emotion/styled";

const StyledBookDetail = styled(Card)`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
`;

const StyledBookProfile = styled(Card)`
  display: flex;
  justfiy-content: flex-start;
  align-items: center;
  padding: 0.7rem;
  gap: 1rem;
`;

const StyledBookContent = styled(Card)`
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
  gap: 0.5rem;
`;

const StyledImage = styled.img`
  width: 280px;
  height: 280px;
  transition: all 0.3s ease;
`;

const StyledTypography = styled(Typography)`
  font-weight: bold !important;
`;

function BookDetail() {
  const { bookDetail, isLoading } = useContext(BookContext);

  return (
    <StyledBookDetail>
      <StyledBookProfile>
        {isLoading ? (
          <Skeleton
            animation="wave"
            variant="rectangular"
            width={300}
            height={300}
          />
        ) : (
          <StyledImage src={bookDetail.image_url} alt="" />
        )}
        {isLoading ? (
          <Skeleton animation="wave" height={40} width="40%" />
        ) : (
          <StyledTypography>{bookDetail.title}</StyledTypography>
        )}
      </StyledBookProfile>
      <StyledBookContent>
        {isLoading ? (
          <>
            <Skeleton
              animation="wave"
              height={20}
              style={{ marginBottom: 6 }}
              width="15%"
            />
            <Skeleton animation="wave" height={300} width="100%" />
          </>
        ) : (
          <>
            <StyledTypography>Description</StyledTypography>
            <p>{bookDetail.description}</p>
          </>
        )}
      </StyledBookContent>
      <StyledBookContent>
        {isLoading ? (
          <>
            <Skeleton
              animation="wave"
              height={15}
              style={{ marginBottom: 6 }}
              width="15%"
            />
            <Skeleton animation="wave" height={15} width="20%" />
          </>
        ) : (
          <>
            <StyledTypography>Authors</StyledTypography>
            <p>{bookDetail.authors}</p>
          </>
        )}
      </StyledBookContent>
      <StyledBookContent>
        {isLoading ? (
          <>
            <Skeleton
              animation="wave"
              height={15}
              style={{ marginBottom: 6 }}
              width="15%"
            />
            <Skeleton animation="wave" height={15} width="25%" />
          </>
        ) : (
          <>
            <StyledTypography>Genres</StyledTypography>
            <p>{bookDetail.genres}</p>
          </>
        )}
      </StyledBookContent>
      <StyledBookContent>
        {isLoading ? (
          <>
            <Skeleton
              animation="wave"
              height={20}
              style={{ marginBottom: 6 }}
              width="15%"
            />
            <Skeleton animation="wave" height={15} width="20%" />
          </>
        ) : (
          <>
            <StyledTypography>Format</StyledTypography>
            <p>{bookDetail.format}</p>
          </>
        )}
      </StyledBookContent>
    </StyledBookDetail>
  );
}

export default BookDetail;
