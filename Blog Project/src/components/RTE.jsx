// import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form';

export default function RTE({ name, control, label, defaultValue = "" }) {
    return (
        <div className="w-full">
            {label && <label className="inline-block mb-1 pl-1 text-white">{label}</label>}

            <Controller
                name={name || 'content'}
                control={control}
                render={({ field: { onChange } }) => (
                    <Editor
                        apiKey="2itoj3545t5mv79me46h1z9p2wk9k7w9u1lb85wa7rajn9k6"
                        initialValue={defaultValue}
                        init={{
                            initialValue: defaultValue,
                            height: 500,
                            menubar: true,
                            plugins: [
                                'image',
                                'advlist',
                                'autolink',
                                'lists',
                                'link',
                                'image',
                                'charmap',
                                'preview',
                                'anchor',
                                'searchreplace',
                                'visualblocks',
                                'code',
                                'fullscreen',
                                'insertdatetime',
                                'media',
                                'table',
                                'code',
                                'help',
                                'wordcount',
                                'anchor',
                            ],
                            toolbar:
                                'undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help',
                            content_style:
                                'body { font-family: "Courier New", Courier, monospace; font-size: 14px; color: #fff; }',
                        }}
                        onEditorChange={onChange}
                    />
                )}
            />
        </div>
    );
}
