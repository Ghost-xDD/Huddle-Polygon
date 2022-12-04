# Huddle (Decentralized Pinterest)

Huddle is a decentralized social media and image sharing platform like pinterest / unsplash where users can find and share ideas to spark inspiration, and interact with a community of like minded people.

## Problem
- Censorship: In traditional web2 social apps, users have little to no control over how their data is managed. 
- Last Week, Pinterest [shutdown it's creators rewards program](https://techcrunch.com/2022/11/30/pinterest-shuts-down-its-creator-rewards-program/) that was meant to enable fans support their favorite creators with tips. Thousands of creators that were earning with the programme now have no way of receiving donations.

## Our Solution
- We create a platform where users can express their creative prowess freely without fear of their content being taken down.
- All user content are saved directly on IPFS, so no one central entity has control over how user data is managed.
- Users have the option to remain anonymous while creating quality content
- With Huddle, Creators can receive tips from fans of their content directly to their wallet without any secondary intermediary. They don't have to be bothered by a payment program shutting down. This reduces the level of trust, responsibility and dependency on a centralized entity.
- All transactions are transparent as they can easily be viewed on the blockchain.

## Tech Stack
- React (Next.js) & TailwindCSS for the frontend
- NFT.storage for pinning creator images and it's JSON metadata to IPFS
- Alchemy NFT API for getting NFTs minted by users
- RainbowKit / Wagmi for authenticating users and getting wallet balance and address
- Polygon Mumbai Testnet for deployment of smart contracts powering the Dapp
- Solidity for the smart contracts
- Ethers.js & Hardhat for testing & deploying smart contracts

## Verified Smart Contracts Links (Polygon Mumbai)
- Huddle (ERC 721): https://mumbai.polygonscan.com/address/0x9EA38BFCC3c3b4E3C1a8FC1d861D05c11Fb49a14
  - Allow any of the platform's users to mint a post to their profile
- Huddle Tips: https://mumbai.polygonscan.com/address/0x5031c474Bbea0c5aced442BC250533fb02b66482
  - Sends and saves all users tip transactions on the Polygon Mumbai Testnet
  - Gets the total transaction count
- Huddle Comments: https://mumbai.polygonscan.com/address/0x6f9798263B48C42a322cF19363EA1B8B3b2b0824
  - allows users to add comments to any particular post
  - takes in a specific page's slug to get all user comments for that particular post

## User Interface
### Home Page
- This is the landing page of the app. All the different posts made by different creators are directly populated from IPFS to the user.

![homepage](https://user-images.githubusercontent.com/42726051/205458942-adf0d2ae-245b-4eef-8043-1d433a4ac4ae.JPG)

## Create Post

![create-post](https://user-images.githubusercontent.com/42726051/205462125-24ac4a83-0878-4475-b458-18182241747e.JPG)

### Post Detail Page
- Here, the users can see more details about a specific post 

![post details page](https://user-images.githubusercontent.com/42726051/205459500-69f03100-5b43-4398-9c5d-076eea6de5c4.JPG)
- Users can add comments under a specific post and interact with other members of the community

![comments](https://user-images.githubusercontent.com/42726051/205459881-ca0b983b-8b14-461d-9fef-9abede1a821f.JPG)

- Users can choose to mint a post as NFT to their profile by clicking the mint button, just like how pins work on Pinterest
  
![minted nft](https://user-images.githubusercontent.com/42726051/205459991-9d1c50d9-20fb-4f5b-992b-7f43c89dcd63.JPG)

- Users can directly send a tip to the post creator's wallet

![send tip](https://user-images.githubusercontent.com/42726051/205460101-1dacf0a2-5955-4bd6-927e-bef94eb3a02b.JPG)

![tip sent](https://user-images.githubusercontent.com/42726051/205460108-9d7f5edc-3276-4a58-b6e8-603fe48cb2ff.JPG)

## Profile Page
- User Details

![profilepage](https://user-images.githubusercontent.com/42726051/205460397-6e5f7374-6592-46c5-8db8-5a3258a900a6.JPG)


- This uses the Alchemy NFT API to fetch the NFTs owned by a user's connected wallet, along with it's tokenID and contract address

![my-nfts](https://user-images.githubusercontent.com/42726051/205460373-71d803ef-6f83-4d61-bd88-13c10698c77f.JPG)

## Transactions Page

- **Tips Transferred**: Users can see the details of all the tips they've sent to any creator on the Huddle platform

![tips transferred](https://user-images.githubusercontent.com/42726051/205461515-361ad295-f88f-4678-83ed-ce4900199f3a.JPG)

- **Tips Received**: Users can also see the details of all the tips they've received on their posts, alongside the sender details

![tips received](https://user-images.githubusercontent.com/42726051/205461776-6525e341-5153-4f95-bf54-078d67b713fe.JPG)





