import * as React from 'react';
import {SvgXml} from 'react-native-svg';

const xml = ({ width, height }) =>  `
  <svg width=${width} height=${height} viewBox="0 0 70 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="33.6" height="30.1538" rx="15.0769" fill="#28502E"/>
    <path d="M6.66381 11.6037C6.94811 11.6037 7.11611 11.6425 7.20657 11.6683V10.2209C7.06442 10.1563 6.7155 10.0917 6.35365 10.0917C4.94504 10.0917 4.04042 11.0221 4.04042 12.4566V13.1803H2.98073V14.6535H4.04042V19.5385H5.77211V14.6535H7.20657V13.1803H5.77211V12.4825C5.77211 11.7717 6.27611 11.6037 6.66381 11.6037ZM7.8603 17.8068C7.8603 18.8018 8.68738 19.7194 10.0443 19.7194C10.9877 19.7194 11.5951 19.28 11.9181 18.776C11.9181 19.0215 11.944 19.3705 11.9828 19.5385H13.5594C13.5206 19.3188 13.4818 18.8665 13.4818 18.5305V15.4031C13.4818 14.1237 12.7323 12.9865 10.7163 12.9865C9.01045 12.9865 8.09292 14.0849 7.98953 15.08L9.51445 15.4031C9.56615 14.8474 9.97969 14.3692 10.7292 14.3692C11.4529 14.3692 11.8018 14.744 11.8018 15.1963C11.8018 15.416 11.6855 15.5969 11.3237 15.6486L9.75999 15.8812C8.7003 16.0363 7.8603 16.6695 7.8603 17.8068ZM10.4061 18.44C9.85045 18.44 9.57907 18.0781 9.57907 17.7034C9.57907 17.2123 9.92799 16.9668 10.3674 16.9021L11.8018 16.6825V16.9668C11.8018 18.0911 11.1298 18.44 10.4061 18.44ZM19.0913 13.1545C18.962 13.1415 18.8328 13.1286 18.6906 13.1286C18.1479 13.1286 17.2691 13.2837 16.8814 14.1237V13.1803H15.2143V19.5385H16.9331V16.6308C16.9331 15.2609 17.6956 14.8345 18.5743 14.8345C18.7294 14.8345 18.8974 14.8474 19.0913 14.8861V13.1545ZM22.019 19.5385V15.8166C22.019 15.1188 22.4584 14.5631 23.208 14.5631C23.9834 14.5631 24.3323 15.08 24.3323 15.7649V19.5385H26.0381V15.8166C26.0381 15.1317 26.4775 14.5631 27.2141 14.5631C28.0024 14.5631 28.3384 15.08 28.3384 15.7649V19.5385H30.0055V15.416C30.0055 13.7101 28.8812 12.9994 27.7052 12.9994C26.8652 12.9994 26.1932 13.2837 25.6892 14.0591C25.3661 13.3741 24.6683 12.9994 23.8024 12.9994C23.1046 12.9994 22.2904 13.3354 21.9415 13.9557V13.1803H20.3003V19.5385H22.019Z" fill="white"/>
    <path d="M36.6585 19.5385V13.1803H34.9397V19.5385H36.6585ZM34.7329 11.0997C34.7329 11.6683 35.2111 12.1465 35.7926 12.1465C36.3871 12.1465 36.8523 11.6683 36.8523 11.0997C36.8523 10.5052 36.3871 10.0271 35.7926 10.0271C35.2111 10.0271 34.7329 10.5052 34.7329 11.0997ZM40.2174 15.8812C40.2174 15.1446 40.6568 14.5631 41.4063 14.5631C42.2334 14.5631 42.5823 15.1188 42.5823 15.8295V19.5385H44.3011V15.5323C44.3011 14.1366 43.5774 13.0123 42.0008 13.0123C41.3158 13.0123 40.5534 13.3095 40.1657 13.9686V13.1803H38.4986V19.5385H40.2174V15.8812ZM51.9282 13.1803H50.119L48.607 17.4449L47.0304 13.1803H45.1436L47.7411 19.5385H49.4599L51.9282 13.1803ZM54.0382 15.6357C54.077 15.0541 54.568 14.3821 55.4597 14.3821C56.4419 14.3821 56.8554 15.0025 56.8813 15.6357H54.0382ZM57.0493 17.2898C56.8425 17.8585 56.4031 18.2591 55.6019 18.2591C54.749 18.2591 54.0382 17.6517 53.9994 16.8117H58.5484C58.5484 16.7858 58.5742 16.5274 58.5742 16.2818C58.5742 14.24 57.3982 12.9865 55.4339 12.9865C53.8056 12.9865 52.3065 14.3046 52.3065 16.3335C52.3065 18.4788 53.8444 19.7323 55.589 19.7323C57.1527 19.7323 58.1607 18.8148 58.4837 17.7163L57.0493 17.2898ZM59.3849 17.768C59.4625 18.4917 60.1215 19.7323 62.0341 19.7323C63.7012 19.7323 64.5025 18.6726 64.5025 17.6388C64.5025 16.7083 63.8692 15.9458 62.6157 15.6874L61.7111 15.4935C61.3621 15.4289 61.1295 15.2351 61.1295 14.9249C61.1295 14.5631 61.4914 14.2917 61.9437 14.2917C62.6674 14.2917 62.9388 14.7698 62.9905 15.1446L64.4249 14.8215C64.3474 14.1366 63.74 12.9865 61.9308 12.9865C60.5609 12.9865 59.5529 13.9298 59.5529 15.0671C59.5529 15.9588 60.1086 16.6954 61.3363 16.9668L62.1763 17.1606C62.6674 17.264 62.8612 17.4966 62.8612 17.7809C62.8612 18.1169 62.5898 18.4141 62.0212 18.4141C61.2717 18.4141 60.8969 17.9489 60.8581 17.4449L59.3849 17.768ZM68.0038 11.2806H66.453V12.1723C66.453 12.7409 66.1429 13.1803 65.4709 13.1803H65.1478V14.7052H66.298V17.6646C66.298 18.8923 67.0733 19.6289 68.314 19.6289C68.818 19.6289 69.1281 19.5385 69.2832 19.4738V18.0523C69.1927 18.0781 68.9601 18.104 68.7533 18.104C68.2623 18.104 68.0038 17.9231 68.0038 17.3674V14.7052H69.2832V13.1803H68.0038V11.2806Z" fill="#28502E"/>
  </svg>
`;

const Logo = ({ width, height }) => <SvgXml xml={xml({ width, height})} width={width} height={height} />;

Logo.defaultProps = {
  width: "100",
  height: "60"
}

export default Logo;