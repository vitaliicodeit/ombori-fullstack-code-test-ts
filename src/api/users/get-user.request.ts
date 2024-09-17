import { USERS_ENDPOINT } from '../endoints.constants';

import { IGetUserParams } from './interfaces/get-user-params.interface';
import { IUserData } from './interfaces/user-data.interface';

export const getUserRequest = async (
  params: IGetUserParams = {},
): Promise<TPaginatedResponse<IUserData>> => {
  try {
    const urlParams = new URLSearchParams();

    if (params.delay) {
      urlParams.set('delay', params.delay.toString());
    }

    if (params.per_page) {
      urlParams.set('per_page', params.per_page.toString());
    }

    if (params.page) {
      urlParams.set('page', params.page.toString());
    }

    // Normally this should be moved to helper function like 'httpRequest'
    // for cases when we have many requests
    const response = await fetch(
      `${USERS_ENDPOINT}${urlParams.size > 0 ? `?${urlParams.toString()}` : ''}`,
      {
        method: 'GET',
      },
    );

    if (!response.ok) {
      return {
        success: false,
      };
    }

    const { page, total, data } = await response.json();

    return {
      page,
      data,
      total,
      success: true,
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);

    return {
      success: false,
    };
  }
};
