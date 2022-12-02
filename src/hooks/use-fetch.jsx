import controllers from '../lib/controllers';
import { useQuery } from 'react-query';

export default function useFetch() {
  const { data: allcourses, isLoading: loadingCourses } = useQuery(
    ['allcourses'],
    () => controllers.getCourses()
  );
  const { data: allCategory, isLoading: loadingCategory } = useQuery(
    ['allCategory'],
    () => controllers.getCategory()
  );

  return {
    allcourses,
    allCategory,
    loadingCourses,
    loadingCategory,
  };
}
