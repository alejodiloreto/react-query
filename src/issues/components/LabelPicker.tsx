import { useLabels } from "../../hooks"
import { LoadingIcon } from "../../shared/components/LoadingIcon";

interface Props {
  selectedLabels: string[];
  onChange: (labelName: any) => void
}

export const LabelPicker: React.FC<Props> = ({ selectedLabels, onChange }) => {

  const { isLoading, data } = useLabels();

  if (isLoading) {
    return (<LoadingIcon />)
  }

  return (
    <div>
      {
        data?.map(label => (
          <span
            key={label.id}
            className={`badge rounded-pill m-1 label-picker ${selectedLabels.includes(label.name) ? 'label-active' : ''} `}
            style={{ border: `1px solid #${label.color}`, color: `#${label.color}` }}
            onClick={() => onChange(label.name)}
          >
            {label.name}
          </span>
        ))
      }
    </div>
  )
}
