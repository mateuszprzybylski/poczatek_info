import { useAppSelector } from '../../store/hooks';

type Props = {
  darkModeAsset: string;
  lightModeAsset: string;
  className?: string;
  alt?: string;
  width?: number;
  height?: number;
};

const ThemeBasedAsset: React.FC<Props> = (props) => {
  const { darkModeAsset, lightModeAsset, className, alt, height, width } = props;
  const isDarkMode = useAppSelector((state) => state.ui.isDarkMode);

  return (
    <img
      src={isDarkMode? darkModeAsset : lightModeAsset}
      width={width}
      height={height}
      className={className}
      alt={alt}
    />
  );
};

export default ThemeBasedAsset;
