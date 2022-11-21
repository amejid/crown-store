import CategoryItem from "../category-item/category-item.component";
import './directory.styles.scss'

const Directory = ({categories}) => {
  return (
    <div className="directory-container">
      {categories.map((category) => <CategoryItem id={category.id} category={category}/>)}
    </div>
  )
}
export default Directory;