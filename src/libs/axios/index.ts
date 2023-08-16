import axios from 'axios'
import type { PoolInformationType } from '@/types/'

/**
 * https://api.koios.rest/#post-/pool_info
 * @returns 
 */
export const fetchKoiosPoolInformation = async (pool_id: string[]): Promise<PoolInformationType[]> => {
  const res = await axios.post('https://api.koios.rest/api/v0/pool_info',{
    _pool_bech32_ids : pool_id
  });
  return res.data;
}