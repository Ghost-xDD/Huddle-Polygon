import '@rainbow-me/rainbowkit/styles.css';
import merge from 'lodash.merge';
import {
  getDefaultWallets,
  RainbowKitProvider,
  lightTheme,
} from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import Layout from '../components/Layout';
import '../styles/globals.css';

// const alchemyKey = process.env.NEXT_PUBLIC_ALCHEMY_KEY;

// console.log(alchemyKey);

const { chains, provider } = configureChains(
  [chain.polygonMumbai],
  [
    alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_KEY }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'huddle',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const myTheme = merge(lightTheme(), {
  colors: {
    accentColor: '#CD1021',
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={myTheme} coolMode>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
