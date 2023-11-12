/* Import */
import { getLoginWithKakao } from "@apis/auth";
import getBusinessInfo from "@apis/business";
import LoadingSpinner from "@components/composite/loadingSpinner";
import { setCookie } from "cookies-next";
import styled from "@emotion/styled";
import { useEffect } from "react";
import { useRouter } from "next/router";
import useSellerState from "@hooks/useSellerState";
import useUserState from "@hooks/useUserState";
import withAuth from "@libs/withAuth";

// ----------------------------------------------------------------------------------------------------

/* Style */
const LoadingContainer = styled("div")`
    // Layout Attribute
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3em;

    // Box Model Attribute
    width: 100vw;
    height: 100vh;
`;

// ----------------------------------------------------------------------------------------------------

/* Sign In Loading Page */
function SignInLoading() {
    // States and Variables
    const router = useRouter();
    const [, setUser] = useUserState();
    const [, setSeller] = useSellerState();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const code = params.get("code");
        if (code) {
            getLoginWithKakao(code).then((userResult) => {
                const { accessToken, refreshToken } = userResult.data.tokenDto;
                const {
                    userId,
                    userNickname,
                    userImgUrl,
                    userAddress,
                    userBusiness,
                    userMoney,
                    userPhone,
                    visited,
                    businessId,
                } = userResult.data;

                setCookie("access-token", accessToken);
                setCookie("refresh-token", refreshToken);
                setUser({
                    userId,
                    userNickname,
                    userImgUrl,
                    userAddress,
                    userBusiness,
                    userBusinessId: businessId,
                    userMoney,
                    userPhone,
                    visited,
                });

                if (userBusiness) {
                    getBusinessInfo(userBusiness).then((sellerResult) => {
                        const { businessName, businessImgUrl } = sellerResult.data;
                        setSeller({
                            sellerId: businessId,
                            sellerName: businessName,
                            sellerImgUrl: businessImgUrl,
                        });
                    });
                }

                if (visited) {
                    router.replace("/");
                } else {
                    router.replace("/sign-up");
                }
            });
        } else {
            router.replace("/sign-in");
        }
    }, []);

    return (
        <LoadingContainer>
            <LoadingSpinner />
        </LoadingContainer>
    );
}

// ----------------------------------------------------------------------------------------------------

/* Export */
export default withAuth({ WrappedComponent: SignInLoading, guardType: "GUEST_ONLY" });
