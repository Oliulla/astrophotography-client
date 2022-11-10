import { useEffect } from 'react';

const useTitle = (title) => {
   useEffect(() => {
    document.title = `${title} - Astrophotogrphy`;
   }, [title])
};

export default useTitle;