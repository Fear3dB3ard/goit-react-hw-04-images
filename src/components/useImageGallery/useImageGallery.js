import { useState, useEffect } from 'react';
import axios from 'axios';

const useImageGallery = (query, page) => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      if (!query) return;
  
      const fetchImages = async () => {
        setLoading(true);
        setError(null);
  
        try {
          const response = await axios.get(
            `https://pixabay.com/api/?q=${query}&page=${page}&key=43929846-835a86fdfab7ada918d424e07&image_type=photo&orientation=horizontal&per_page=12`
          );
          setImages((prevImages) => [...prevImages, ...response.data.hits]);
        } catch (error) {
          setError('Error fetching images');
        } finally {
          setLoading(false);
        }
      };
  
      fetchImages();
    }, [query, page]);
  
    return { images, loading, error };
  };
  
  export default useImageGallery;