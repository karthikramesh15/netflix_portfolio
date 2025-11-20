import React, { useEffect, useState } from 'react';
import './Photography.css';
import { getPhotography } from '../queries/getPhotography';

interface Photo {
  url: string;
  alt?: string;
}

const Photography: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    async function loadPhotos() {
      try {
        const data = await getPhotography();
        const flattened = data.map((item: any) => item.photos);
        setPhotos(flattened);
      } catch (err) {
        console.error('Error loading photos:', err);
      }
    }
    loadPhotos();
  }, []);

  return (
    <div className="photography-container">
      <h2 className="photography-title">📸 PIXEL POETRY HUB</h2>
      <p className="photography-intro">
        A visual collection of photos through a lens around the world.
      </p>

      <div className="photography-grid">
        {photos.map((photo, index) => (
          <div key={index} className="photo-card">
            <img src={photo.url} alt={photo.alt || `photo-${index}`} className="photo-img" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photography;
