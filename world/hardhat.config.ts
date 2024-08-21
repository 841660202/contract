import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
dotenv.config();



const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
  networks: {
    sepolia: {
      url: 'https://ethereum-sepolia-rpc.publicnode.com',
      accounts: { "mnemonic": process.env.MNEMONIC }
    },
    baseSepolia: {
      url: 'https://base-sepolia-rpc.publicnode.com',
      accounts: { "mnemonic": process.env.MNEMONIC }
    },
    optimismSepolia: {
      url: 'https://optimism-sepolia-rpc.publicnode.com',
      accounts: { "mnemonic": process.env.MNEMONIC }
    },
    arbitrumSepolia: {
      url: 'https://arbitrum-sepolia-rpc.publicnode.com',
      accounts: { "mnemonic": process.env.MNEMONIC }
    }
  },
  // etherscan: {
  //    apiKey: process.env.ETHERSCAN_API_KEY || ""  // 使用环境变量
  // },
  
  etherscan: {
    apiKey: {
      sepolia: process.env.ETHERSCAN_API_KEY || "",  // 使用环境变量
      baseSepolia: process.env.BASE_ETHERSCAN_API_KEY || "", 
      optimismSepolia: process.env.OP_ETHERSCAN_API_KEY || "",
      arbitrumSepolia: process.env.AR_ETHERSCAN_API_KEY || ""
    },
    customChains: [
      {
        network: "base",
        chainId: 8453, // Base 主网的链 ID
        urls: {
          apiURL: "https://api.basescan.org/api", // Base Etherscan API URL
          browserURL: "https://basescan.org" // Base Etherscan 浏览器 URL
        }
      },
      {
        network: "baseSepolia",
        chainId: 84531, // Base Sepolia 测试网的链 ID
        urls: {
          apiURL: "https://api-sepolia.basescan.org/api", // Base Sepolia Etherscan API URL
          browserURL: "https://sepolia.basescan.org" // Base Sepolia Etherscan 浏览器 URL
        }
      },
    {
        network: "optimismSepolia",
        chainId: 11155420,
        urls: {
          apiURL: "https://optimism-sepolia.blockscout.com/api",
          browserURL: "https://optimism-sepolia.blockscout.com/",
        }
      },
      {
        network: "arbitrumSepolia",
        chainId: 421614, // Arbitrum Sepolia 测试网的链 ID
        urls: {
          apiURL: "https://api-sepolia.arbiscan.io/api", // NOTE: 这个地址不是rpc地址
          browserURL: "https://sepolia.arbiscan.io" // Arbitrum Sepolia Etherscan 浏览器 URL
        }
      }
    ]
  }
};

export default config;
