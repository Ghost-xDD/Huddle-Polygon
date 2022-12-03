import { useEffect, useState } from 'react';
import formatAddress from '../utils/formatAddress';
import getAvatar from '../utils/getAvatars';
import Image from 'next/image';

const CommentCard = ({ message, sender }) => {
  const [avatar, setAvatar] = useState('');

  useEffect(() => {
    setAvatar(getAvatar);
  }, []);

  return (
    <div className="antialiased mx-6 max-w-screen-sm mt-2">
      <div>
        <div className="flex">
          <div className="flex-shrink-0 mr-3">
            <Image
              className="bg-gray-400 rounded-full"
              src={avatar}
              width={40}
              height={40}
              alt="avatar"
            />
          </div>
          <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
            <strong>{formatAddress(sender)}</strong>{' '}
            <span className="text-xs text-gray-400">3:34 PM</span>
            <p className="text-sm">{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
