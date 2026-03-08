import AdvantagesList from '../components/AdvantagesList/AdvantagesList';
import NewProductsList from '../components/NewProductsList/NewProductsList';
import NewsList from '../components/NewsList/NewsList';
import ShopList from '../components/ShopList/ShopList';

export default function Home() {
  return (
    <>
      <AdvantagesList />
      <NewProductsList />
      <NewsList />
      <ShopList />
    </>
  );
}
