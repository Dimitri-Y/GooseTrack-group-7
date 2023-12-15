import { useAdaptivePicture } from '../../../hooks/useAdaptivePicture';
import {
  WeekendHeaderItem,
  WeekHeaderList,
} from './MonthCalendarHeader.styled';
import { useTranslation } from 'react-i18next';

export const MonthCalendarHeader = () => {
  const mediaResponse = useAdaptivePicture();
  const isMobile = mediaResponse.isMobile;

  const { t } = useTranslation();

  return (
    <>
      {isMobile ? (
        <WeekHeaderList>
          <li>{t('M')}</li>
          <li>{t('T')}</li>
          <li>{t('W')}</li>
          <li>{t('T')}</li>
          <li>{t('F')}</li>
          <WeekendHeaderItem>{t('S')}</WeekendHeaderItem>
          <WeekendHeaderItem>{t('S')}</WeekendHeaderItem>
        </WeekHeaderList>
      ) : (
        <WeekHeaderList>
          <li>{t('Mon')}</li>
          <li>{t('Tue')}</li>
          <li>{t('Wed')}</li>
          <li>{t('Thu')}</li>
          <li>{t('Fri')}</li>
          <WeekendHeaderItem>{t('Sat')}</WeekendHeaderItem>
          <WeekendHeaderItem>{t('Sun')}</WeekendHeaderItem>
        </WeekHeaderList>
      )}
    </>
  );
};
