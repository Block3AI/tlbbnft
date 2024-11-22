TLBB NFT Project

Welcome to the TLBB NFT Project! This repository uses Metaplex, Candy Machine, and Sugar CLI to manage the creation, deployment, and minting of NFTs on the Solana blockchain.

Project Overview

This project is built to facilitate the seamless deployment of an NFT collection using Solana’s ecosystem tools. Key components include:
	•	Metaplex Candy Machine v3: Used for creating and managing NFT collections.
	•	Sugar CLI: Simplifies interaction with the Candy Machine for uploading assets, deploying configurations, and minting.
	•	Frontend Application: Provides an interface for interacting with the NFT collection.

Folder Structure

tlbb-nft-project/
├── assets/            # Contains images and metadata for NFTs
├── config/            # Candy Machine configuration files
├── app/               # Frontend application for minting
├── scripts/           # Utility scripts for interacting with Candy Machine
├── tests/             # Integration and unit tests for the project
├── .env               # Environment variables (not included in version control)
├── README.md          # Project documentation

Getting Started

Prerequisites

	1.	Install Solana CLI:

sh -c "$(curl -sSfL https://release.solana.com/stable/install)"


	2.	Install Sugar CLI:

npm install -g @metaplex-foundation/sugar-cli



Installation

	1.	Clone the repository:

git clone https://github.com/your-username/tlbb-nft-project.git
cd tlbb-nft-project


	2.	Install frontend dependencies:

cd app
npm install


	3.	Configure the environment:
	•	Create a .env file with the following variables:

PRIVATE_KEY=your-private-key
RPC_URL=https://api.devnet.solana.com


	•	Replace your-private-key with your wallet’s private key.

Using Candy Machine with Sugar CLI

1. Prepare Assets

	•	Place your NFT images and metadata files in the assets/ folder.
	•	Each metadata file should follow the Metaplex JSON standard.

2. Upload Assets

sugar upload

This will upload your assets to Arweave or another configured storage provider.

3. Verify Upload

sugar verify

Ensure all files are uploaded and match your configurations.

4. Deploy the Candy Machine

sugar deploy

This will deploy the Candy Machine smart contract on the Solana blockchain.

5. Mint NFTs

	•	Single NFT:

sugar mint


	•	Multiple NFTs:

sugar mint --number 10

Frontend Application

The frontend is built to interact with the Candy Machine.
	1.	Start the application:

cd app
npm run dev


	2.	Open the browser at http://localhost:3000.

Testing

	1.	Run tests:

npm test


	2.	Test scripts are located in the tests/ folder.

Resources

	•	Metaplex Documentation
	•	Sugar CLI Guide

License

This project is licensed under the MIT License.
