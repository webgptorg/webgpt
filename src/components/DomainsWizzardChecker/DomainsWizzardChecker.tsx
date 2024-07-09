import { useEffect, useState } from 'react';
import { forTime } from 'waitasecond';
import { checkDomain } from '../../utils/domains/checkDomain';
import { useCurrentWallpaper } from '../../utils/hooks/useCurrentWallpaper';
import { DomainStatusText, DomainStatusTextProps } from '../Domains/DomainStatusText/DomainStatusText';
import styles from './DomainsWizzardChecker.module.css';

/**
 * Renders a domain checker with advanced options and patterns
 */
export function DomainsWizzardChecker() {
    const [wallpaper] = useCurrentWallpaper();

    const [domains, setDomains] = useState<
        Array<Pick<DomainStatusTextProps, 'domain' | 'domainStatus' | 'checkedAt' | 'tryCount'>>
    >([]);

    useEffect(() => {
        let isDestroyed = false;

        (async () => {
            while (true) {
                await forTime(1000);

                if (isDestroyed) {
                    return;
                }

                const domain = 'towns.cz';

                const domainsCheck: Pick<DomainStatusTextProps, 'domain' | 'domainStatus' | 'checkedAt' | 'tryCount'> =
                    {
                        domain,
                        domainStatus: 'PENDING',
                        checkedAt: new Date(),
                        tryCount: 1,
                    };

                setDomains((domains) => [...domains, domainsCheck]);

                domainsCheck.domainStatus = await checkDomain(domain);

                setDomains((domains) => [...domains.filter((_) => _.domain === domain), domainsCheck]);
            }
        })();

        return () => {
            isDestroyed = true;
        };
    }, []);

    return (
        <div className={styles.DomainsWizzardChecker}>
            <ul>
                {wallpaper.keywords?.map((keyword) => (
                    <li key={keyword}>{keyword}</li>
                ))}
            </ul>
            {domains.map(({ domain, domainStatus, checkedAt, tryCount }) => (
                <DomainStatusText
                    key={domain}
                    {...{ domain, domainStatus, checkedAt, tryCount }}
                    isActionButtonShown={true}
                    isShownDetailedFail={true}
                />
            ))}
        </div>
    );
}
