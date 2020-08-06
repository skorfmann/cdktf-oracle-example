// https://www.terraform.io/docs/providers/oci/r/data_oci_objectstorage_object_head.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "bucket": {
        "type": "string",
        "required": true
      },
      "content_length": {
        "type": "number",
        "computed": true
      },
      "content_type": {
        "type": "string",
        "computed": true
      },
      "etag": {
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

export interface DataOciObjectstorageObjectHeadConfig extends TerraformMetaArguments {
  readonly bucket: string;
  readonly namespace: string;
  readonly object: string;
}

// Resource

export class DataOciObjectstorageObjectHead extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciObjectstorageObjectHeadConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_objectstorage_object_head',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bucket = config.bucket;
    this._namespace = config.namespace;
    this._object = config.object;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket - computed: false, optional: false, required: true
  private _bucket: string;
  public get bucket() {
    return this._bucket;
  }
  public set bucket(value: string) {
    this._bucket = value;
  }

  // content_length - computed: true, optional: false, required: true
  public get contentLength() {
    return this.getNumberAttribute('content_length');
  }

  // content_type - computed: true, optional: false, required: true
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // etag - computed: true, optional: false, required: true
  public get etag() {
    return this.getStringAttribute('etag');
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

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: this._bucket,
      namespace: this._namespace,
      object: this._object,
    };
  }
}
