// https://www.terraform.io/docs/providers/oci/r/data_oci_objectstorage_object.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "base64_encode_content": {
        "type": "bool",
        "optional": true
      },
      "bucket": {
        "type": "string",
        "required": true
      },
      "cache_control": {
        "type": "string",
        "computed": true
      },
      "content": {
        "type": "string",
        "computed": true
      },
      "content_disposition": {
        "type": "string",
        "computed": true
      },
      "content_encoding": {
        "type": "string",
        "computed": true
      },
      "content_language": {
        "type": "string",
        "computed": true
      },
      "content_length": {
        "type": "string",
        "computed": true
      },
      "content_length_limit": {
        "type": "number",
        "optional": true
      },
      "content_md5": {
        "type": "string",
        "computed": true
      },
      "content_type": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "metadata": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "namespace": {
        "type": "string",
        "required": true
      },
      "object": {
        "type": "string",
        "required": true
      },
      "version_id": {
        "type": "string",
        "optional": true,
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { StringMap } from "cdktf";

// Configuration

export interface DataOciObjectstorageObjectConfig extends TerraformMetaArguments {
  readonly base64EncodeContent?: boolean;
  readonly bucket: string;
  readonly contentLengthLimit?: number;
  readonly namespace: string;
  readonly object: string;
  readonly versionId?: string;
}

// Resource

export class DataOciObjectstorageObject extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciObjectstorageObjectConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_objectstorage_object',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._base64EncodeContent = config.base64EncodeContent;
    this._bucket = config.bucket;
    this._contentLengthLimit = config.contentLengthLimit;
    this._namespace = config.namespace;
    this._object = config.object;
    this._versionId = config.versionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base64_encode_content - computed: false, optional: true, required: false
  private _base64EncodeContent?: boolean;
  public get base64EncodeContent() {
    return this._base64EncodeContent;
  }
  public set base64EncodeContent(value: boolean | undefined) {
    this._base64EncodeContent = value;
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket: string;
  public get bucket() {
    return this._bucket;
  }
  public set bucket(value: string) {
    this._bucket = value;
  }

  // cache_control - computed: true, optional: false, required: true
  public get cacheControl() {
    return this.getStringAttribute('cache_control');
  }

  // content - computed: true, optional: false, required: true
  public get content() {
    return this.getStringAttribute('content');
  }

  // content_disposition - computed: true, optional: false, required: true
  public get contentDisposition() {
    return this.getStringAttribute('content_disposition');
  }

  // content_encoding - computed: true, optional: false, required: true
  public get contentEncoding() {
    return this.getStringAttribute('content_encoding');
  }

  // content_language - computed: true, optional: false, required: true
  public get contentLanguage() {
    return this.getStringAttribute('content_language');
  }

  // content_length - computed: true, optional: false, required: true
  public get contentLength() {
    return this.getStringAttribute('content_length');
  }

  // content_length_limit - computed: false, optional: true, required: false
  private _contentLengthLimit?: number;
  public get contentLengthLimit() {
    return this._contentLengthLimit;
  }
  public set contentLengthLimit(value: number | undefined) {
    this._contentLengthLimit = value;
  }

  // content_md5 - computed: true, optional: false, required: true
  public get contentMd5() {
    return this.getStringAttribute('content_md5');
  }

  // content_type - computed: true, optional: false, required: true
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // metadata - computed: true, optional: false, required: true
  public metadata(key: string): string {
    return new StringMap(this, 'metadata').lookup(key);
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace: string;
  public get namespace() {
    return this._namespace;
  }
  public set namespace(value: string) {
    this._namespace = value;
  }

  // object - computed: false, optional: false, required: true
  private _object: string;
  public get object() {
    return this._object;
  }
  public set object(value: string) {
    this._object = value;
  }

  // version_id - computed: true, optional: true, required: false
  private _versionId?: string;
  public get versionId() {
    return this._versionId ?? this.getStringAttribute('version_id');
  }
  public set versionId(value: string | undefined) {
    this._versionId = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      base64_encode_content: this._base64EncodeContent,
      bucket: this._bucket,
      content_length_limit: this._contentLengthLimit,
      namespace: this._namespace,
      object: this._object,
      version_id: this._versionId,
    };
  }
}
