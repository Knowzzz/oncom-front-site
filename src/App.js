import DocPage from "./pages/docs/doc";
import DocCustomizedProfilePage from "./pages/docs/features/community/docs-customized-profile";
import DocFriendsPrivateMessagingPage from "./pages/docs/features/community/docs-friends-private-messaging";
import DocTagsPage from "./pages/docs/features/community/docs-tags";
import DocTransactionInitiationPage from "./pages/docs/features/web3/docs-transaction-initiation";
import DocSignWithWalletPage from "./pages/docs/features/web3/docs-sign-with-wallet";
import DocAccountCreationPage from "./pages/docs/getting-started/docs-account-creation";
import DocLoggingInPage from "./pages/docs/getting-started/docs-logging-in";
import Home from "./pages/home/home";
import NotFound from "./pages/NotFound";

import { Route, Routes } from "react-router-dom";
import DocTokenVerificationPage from "./pages/docs/features/web3/docs-token-verification";
import DocNFTExchangePage from "./pages/docs/features/web3/docs-secure-nft-cryptocurrency-exchange";
import DocCreatingServerPage from "./pages/docs/server-management/docs-creating-server";
import DocChannelsPage from "./pages/docs/server-management/docs-channels";
import DocCategoriesPage from "./pages/docs/server-management/docs-categories";
import DocRolesPermissionsPage from "./pages/docs/server-management/docs-roles-permissions";
import DocInviteLinkPage from "./pages/docs/server-management/docs-invite-link";
import DocIntroPage from "./pages/docs/server-management/dao-mode/docs-intro";
import DocRPDAOPage from "./pages/docs/server-management/dao-mode/docs-roles-permissions-dao";
import DocProposalsPage from "./pages/docs/server-management/dao-mode/docs-proposals";
import DocConclusionPage from "./pages/docs/docs-conclusion";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/docs" element={<DocPage />} />
      <Route
        path="/docs/account-creation"
        element={<DocAccountCreationPage />}
      />
      <Route path="/docs/logging-in" element={<DocLoggingInPage />} />
      <Route
        path="/docs/friends-private-messaging"
        element={<DocFriendsPrivateMessagingPage />}
      />
      <Route path="/docs/tags" element={<DocTagsPage />} />
      <Route
        path="/docs/customized-profile"
        element={<DocCustomizedProfilePage />}
      />
      <Route
        path="/docs/sign-with-wallet"
        element={<DocSignWithWalletPage />}
      />
      <Route
        path="/docs/transaction-initiation"
        element={<DocTransactionInitiationPage />}
      />
      <Route
        path="/docs/token-verification"
        element={<DocTokenVerificationPage />}
      />
      <Route
        path="/docs/secure-nft-cryptocurrency-exchange"
        element={<DocNFTExchangePage />}
      />
      <Route
        path="/docs/creating-server"
        element={<DocCreatingServerPage />}
      />
      <Route
        path="/docs/channels"
        element={<DocChannelsPage />}
      />
      <Route
        path="/docs/categories"
        element={<DocCategoriesPage />}
      />
      <Route
        path="/docs/roles-permissions"
        element={<DocRolesPermissionsPage />}
      />
      <Route
        path="/docs/invite-link"
        element={<DocInviteLinkPage />}
      />
      <Route
        path="/docs/intro"
        element={<DocIntroPage />}
      />
      <Route
        path="/docs/roles-permissions-dao"
        element={<DocRPDAOPage />}
      />
      <Route
        path="/docs/proposals"
        element={<DocProposalsPage />}
      />
      <Route
        path="/docs/conclusion"
        element={<DocConclusionPage />}
      />
    </Routes>
    
  );
}

export default App;
