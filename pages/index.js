import Landing from '../components/Landing';
import Collage from '../components/Collage';
import { SkeletonTheme } from 'react-loading-skeleton';

export default function Home() {
  return (
    <SkeletonTheme baseColor="#ebebeb" highlightColor="#fff">
      <Landing>
        <ul role="list">
          <Collage />
        </ul>
      </Landing>
    </SkeletonTheme>
  );
}
