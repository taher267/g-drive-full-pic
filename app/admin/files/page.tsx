'use client';

import React from 'react';
import axios from '@/api/axios';
import { FileProps } from '@/types';

const Files: React.FC = () => {
  const [allFiles, setAllFiles] = React.useState<[] | FileProps[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  // const [height, setHeight] = React.useState<number | null>(window.innerHeight);
  React.useEffect(() => {
    setLoading(true);
    axios
      .get('/files')
      .then(({ data }) => {
        setAllFiles(data.files.files);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  //   console.log(allFiles);
  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '25px' }}>
        {allFiles?.map?.((item) => {
          if (item.mimeType.includes('image/')) {
            return (
              <div key={item.id}>
                <img
                  style={{ maxWidth: '200px', height: 'auto' }}
                  src={`https://drive.google.com/uc?export=view&id=${item?.id}`}
                  alt={item.name}
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Files;
