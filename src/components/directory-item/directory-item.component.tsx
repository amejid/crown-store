import { useNavigate } from 'react-router-dom';
import { DirectoryItemContainer, BackgroundImage, Body } from './directory-item.styles';
import {FC} from "react";

type CategoryType = {
  id: number;
  title: string;
  imageUrl: string;
  route: string;
}

type DirectoryItemProps = {
  category: CategoryType;
}

const DirectoryItem: FC<DirectoryItemProps> = ({ category }) => {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
