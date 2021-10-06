import styles from './SearchInput.module.css';
import InputField from 'components/UI/InputField';
import SearchIcon from 'components/Icons/SearchIcon';

export default function SearchInput({ ...props }) {
  return (
    <div className={styles.container}>
      <InputField {...props} />
      <SearchIcon className={styles.searchIcon} />
    </div>
  );
}
