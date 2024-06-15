import React, { useEffect } from "react";
import slugify from "slugify";
import { useField, useFormFields, TextInput } from "payload/components/forms";
import { useDocumentInfo } from "payload/components/utilities";
import { generateRandomHexString } from "../../lib/helpers/string";

const SlugField: React.FC<{ path: string }> = ({ path }) => {
  const { value, setValue } = useField<string>({ path });
  const { id } = useDocumentInfo();
  const title = useFormFields(([fields, dispatch]) => fields.title);

  useEffect(() => {
    if (typeof title?.value !== "undefined" && !id) {
      const slug = slugify(title.value as string, {
        lower: true,
        remove: /[^a-zA-Z0-9- ]/g,
      });
      const randomHex = generateRandomHexString(5);
      setValue(slug + "-" + randomHex);
    }
  }, [title, setValue, id]);

  return (
    <div style={{ marginBottom: "16px" }}>
      <span>
        <TextInput
          path={path}
          name="slug"
          value={value}
          label="Slug"
          description="Auto-generated from the title"
          readOnly
        />
      </span>
    </div>
  );
};

export default SlugField;
