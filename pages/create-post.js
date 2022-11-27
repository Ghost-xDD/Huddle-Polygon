import { NFTStorage, File } from 'nft.storage';
import { useState, useEffect, createRef } from 'react';
import { useAccount } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Switch from '../components/Switch';
import Head from 'next/head';
import formatAddress from '../utils/formatAddress';
import { useRouter } from 'next/router';
import { ToastContainer, toast, Zoom, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { apiKey } from '../components/ApiToken';

const CreatePost = () => {
  // toast.error('Complete all Fields');
  // toast.success('Post uploaded successfully');

  const { isConnected, address } = useAccount();
  console.log(isConnected);

  const router = useRouter();

  const imageSizeRef = createRef();
  const [image, setImage] = useState('');
  const [postTitle, setPostTitle] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [imageTitle, setImageTitle] = useState('');
  const [imageDescription, setImageDescription] = useState('');
  const [imageType, setImageType] = useState('');
  const [quotesEnabled, setQuotesEnabled] = useState(false);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleImage = (e) => {
    setImage(e.target.files[0]);
    setImageTitle(e.target.files[0].name);
    setImageType(e.target.files[0].type);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    toast('Uploading Post', {
      className: 'info-toast',
      draggable: true,
    });

    try {
      const client = new NFTStorage({ token: apiKey });
      const imageFile = new File([image], imageTitle, { type: imageType });
      const metadata = await client.store({
        name: postTitle,
        description: `${authorName}, ${address}`,
        image: imageFile,
      });

      if (metadata) {
        console.log(metadata);
        toast('Post Successfully Uploaded', {
          className: 'success-toast',
          draggable: true,
        });
        router.push('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    mounted && (
      <>
        {/* <ToastContainer draggable={false} transition={Zoom} autoClose={8000} /> */}
        {isConnected && (
          <div className="max-w-7xl mt-4 flex gap-20 h-full py-4 my-24 mx-auto px-4 sm:px-6 lg:px-8">
            <Head>
              <title>Create Post | Huddle</title>
              <meta
                name="description"
                content="Upload post to the decentralized web"
              />
            </Head>

            {image ? (
              <img
                src={URL.createObjectURL(image)}
                alt="image"
                className="w-[650px] h-[70vh] pb-2 mt-10 rounded-[20px]"
              />
            ) : (
              <div className="flex justify-center items-center w-[650px] h-[70vh]">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col justify-center items-center pt-5 pb-6">
                    <svg
                      aria-hidden="true"
                      className="mb-3 w-10 h-10 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      ></path>
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Preview Image</span>
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      PNG or JPG
                    </p>
                    <p className="text-red-900 text-2xl font-bold dark:text-red-900">
                      Max Upload Size: 200px
                    </p>
                  </div>
                </label>
              </div>
            )}

            <section className="relative  shadow-2xl py-8 px-14 max-h-full">
              <div className="mt-1 w-full">
                <form className="" noValidate autoComplete="off">
                  <label
                    htmlFor="eventname"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Upload Image:
                  </label>
                  <input
                    accept="image/*"
                    className="text-sm text-grey-500
            file:mr-5 file:py-3 file:px-10
            file:rounded-lg file:border-0
            file:text-md file:font-semibold  file:text-white
            file:bg-red-500
            hover:file:cursor-pointer hover:file:opacity-80"
                    defaultValue={image}
                    onChange={handleImage}
                    type="file"
                  />

                  <div className="pb-4 pt-2 sm:mt-0 sm:col-span-2">
                    <label
                      htmlFor="post-title"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Wallet Address:
                    </label>
                    <span className="text-md border border-gray-300 w-full px-4 bg-gray-200 text-gray-500">
                      {formatAddress(address)}...
                    </span>
                  </div>

                  <div className="pb-6 sm:mt-0 sm:col-span-2">
                    <label
                      htmlFor="post-title"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Image Title:
                    </label>
                    <input
                      id="post-title"
                      name="Post's Title"
                      type="text"
                      className="p-2 px-4 block max-w-lg w-full shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm border border-gray-300 rounded-md"
                      required
                      placeholder="Set title for post"
                      defaultValue={postTitle}
                      onChange={(e) => setPostTitle(e.target.value)}
                    />
                  </div>

                  <div className="pb-6 sm:mt-0 sm:col-span-2">
                    <label
                      htmlFor="eventname"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Author's Name:
                    </label>
                    <input
                      id="author name"
                      name="Author's name"
                      type="text"
                      className="p-2 px-4 block max-w-lg w-full shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm border border-gray-300 rounded-md"
                      required
                      placeholder="Set a display name"
                      defaultValue={authorName}
                      onChange={(e) => setAuthorName(e.target.value)}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="sizes"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                    >
                      Category:
                    </label>
                    <select
                      id="sizes"
                      label="Choose one option"
                      variant="outlined"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      // onChange={(e) => setImageSize(e.target.value)}
                      defaultValue=""
                    >
                      <option value="car">Cars</option>
                      <option value="fashion">Fashion</option>
                      <option value="productivity">Productivity</option>
                    </select>
                  </div>

                  <div className="pb-6 flex items-center justify-between sm:mt-0 sm:col-span-2">
                    <label
                      htmlFor="eventname"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Enable Quotes:
                    </label>
                    <span>
                      <Switch
                        isOn={quotesEnabled}
                        handleToggle={() => setQuotesEnabled(!quotesEnabled)}
                      />
                    </span>
                  </div>

                  <button
                    className="p-2 mt-4 rounded-lg text-center cursor-pointer text-white font-bold bg-gradient-to-r bg-red-500 hover:opacity-80"
                    variant="contained"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </section>
          </div>
        )}
        {!isConnected && (
          <section
            div
            className="max-w-7xl mt-4 flex gap-20 h-full py-4 my-24 mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div>
              <h1 className="text-center w-full mt-10 text-2xl font-bold">
                Please Connect Wallet To Continue
              </h1>
              <p>
                <ConnectButton />
              </p>
            </div>
          </section>
        )}
      </>
    )
  );
};

export default CreatePost;
