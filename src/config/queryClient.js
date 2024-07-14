import { QueryClient } from '@tanstack/react-query';
import { persistQueryClient } from '@tanstack/react-query-persist-client';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';

// Create a query client
const queryClient = new QueryClient();

// Create a local storage persister
const localStoragePersister = createSyncStoragePersister({
  storage: window.localStorage,
});

// Persist the query client
persistQueryClient({
  queryClient,
  persister: localStoragePersister,
});

export default queryClient;