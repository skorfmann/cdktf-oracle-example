// https://www.terraform.io/docs/providers/oci/r/objectstorage_object.html
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
      "cache_control": {
        "type": "string",
        "optional": true
      },
      "content": {
        "type": "string",
        "optional": true
      },
      "content_disposition": {
        "type": "string",
        "optional": true
      },
      "content_encoding": {
        "type": "string",
        "optional": true
      },
      "content_language": {
        "type": "string",
        "optional": true
      },
      "content_length": {
        "type": "string",
        "computed": true
      },
      "content_md5": {
        "type": "string",
        "computed": true
      },
      "content_type": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "delete_all_object_versions": {
        "type": "bool",
        "optional": true
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
        "optional": true
      },
      "namespace": {
        "type": "string",
        "required": true
      },
      "object": {
        "type": "string",
        "required": true
      },
      "source": {
        "type": "string",
        "optional": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "version_id": {
        "type": "string",
        "computed": true
      },
      "work_request_id": {
        "type": "string",
        "computed": true
      }
    },
    "block_types": {
      "source_uri_details": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "bucket": {
              "type": "string",
              "required": true
            },
            "destination_object_if_match_etag": {
              "type": "string",
              "optional": true
            },
            "destination_object_if_none_match_etag": {
              "type": "string",
              "optional": true
            },
            "namespace": {
              "type": "string",
              "required": true
            },
            "object": {
              "type": "string",
              "required": true
            },
            "region": {
              "type": "string",
              "required": true
            },
            "source_object_if_match_etag": {
              "type": "string",
              "optional": true
            },
            "source_version_id": {
              "type": "string",
              "optional": true
            }
          }
        },
        "max_items": 1
      },
      "timeouts": {
        "nesting_mode": "single",
        "block": {
          "attributes": {
            "create": {
              "type": "string",
              "optional": true
            },
            "delete": {
              "type": "string",
              "optional": true
            },
            "update": {
              "type": "string",
              "optional": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ObjectstorageObjectConfig extends TerraformMetaArguments {
  readonly bucket: string;
  readonly cacheControl?: string;
  readonly content?: string;
  readonly contentDisposition?: string;
  readonly contentEncoding?: string;
  readonly contentLanguage?: string;
  readonly contentType?: string;
  readonly deleteAllObjectVersions?: boolean;
  readonly metadata?: { [key: string]: string };
  readonly namespace: string;
  readonly object: string;
  readonly source?: string;
  /** source_uri_details block */
  readonly sourceUriDetails?: ObjectstorageObjectSourceUriDetails[];
  /** timeouts block */
  readonly timeouts?: ObjectstorageObjectTimeouts;
}
export interface ObjectstorageObjectSourceUriDetails {
  readonly bucket: string;
  readonly destinationObjectIfMatchEtag?: string;
  readonly destinationObjectIfNoneMatchEtag?: string;
  readonly namespace: string;
  readonly object: string;
  readonly region: string;
  readonly sourceObjectIfMatchEtag?: string;
  readonly sourceVersionId?: string;
}
export interface ObjectstorageObjectTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class ObjectstorageObject extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ObjectstorageObjectConfig) {
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
    this._bucket = config.bucket;
    this._cacheControl = config.cacheControl;
    this._content = config.content;
    this._contentDisposition = config.contentDisposition;
    this._contentEncoding = config.contentEncoding;
    this._contentLanguage = config.contentLanguage;
    this._contentType = config.contentType;
    this._deleteAllObjectVersions = config.deleteAllObjectVersions;
    this._metadata = config.metadata;
    this._namespace = config.namespace;
    this._object = config.object;
    this._source = config.source;
    this._sourceUriDetails = config.sourceUriDetails;
    this._timeouts = config.timeouts;
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

  // cache_control - computed: false, optional: true, required: false
  private _cacheControl?: string;
  public get cacheControl() {
    return this._cacheControl;
  }
  public set cacheControl(value: string | undefined) {
    this._cacheControl = value;
  }

  // content - computed: false, optional: true, required: false
  private _content?: string;
  public get content() {
    return this._content;
  }
  public set content(value: string | undefined) {
    this._content = value;
  }

  // content_disposition - computed: false, optional: true, required: false
  private _contentDisposition?: string;
  public get contentDisposition() {
    return this._contentDisposition;
  }
  public set contentDisposition(value: string | undefined) {
    this._contentDisposition = value;
  }

  // content_encoding - computed: false, optional: true, required: false
  private _contentEncoding?: string;
  public get contentEncoding() {
    return this._contentEncoding;
  }
  public set contentEncoding(value: string | undefined) {
    this._contentEncoding = value;
  }

  // content_language - computed: false, optional: true, required: false
  private _contentLanguage?: string;
  public get contentLanguage() {
    return this._contentLanguage;
  }
  public set contentLanguage(value: string | undefined) {
    this._contentLanguage = value;
  }

  // content_length - computed: true, optional: false, required: true
  public get contentLength() {
    return this.getStringAttribute('content_length');
  }

  // content_md5 - computed: true, optional: false, required: true
  public get contentMd5() {
    return this.getStringAttribute('content_md5');
  }

  // content_type - computed: true, optional: true, required: false
  private _contentType?: string;
  public get contentType() {
    return this._contentType ?? this.getStringAttribute('content_type');
  }
  public set contentType(value: string | undefined) {
    this._contentType = value;
  }

  // delete_all_object_versions - computed: false, optional: true, required: false
  private _deleteAllObjectVersions?: boolean;
  public get deleteAllObjectVersions() {
    return this._deleteAllObjectVersions;
  }
  public set deleteAllObjectVersions(value: boolean | undefined) {
    this._deleteAllObjectVersions = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string };
  public get metadata() {
    return this._metadata;
  }
  public set metadata(value: { [key: string]: string } | undefined) {
    this._metadata = value;
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

  // source - computed: false, optional: true, required: false
  private _source?: string;
  public get source() {
    return this._source;
  }
  public set source(value: string | undefined) {
    this._source = value;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // version_id - computed: true, optional: false, required: true
  public get versionId() {
    return this.getStringAttribute('version_id');
  }

  // work_request_id - computed: true, optional: false, required: true
  public get workRequestId() {
    return this.getStringAttribute('work_request_id');
  }

  // source_uri_details - computed: false, optional: true, required: false
  private _sourceUriDetails?: ObjectstorageObjectSourceUriDetails[];
  public get sourceUriDetails() {
    return this._sourceUriDetails;
  }
  public set sourceUriDetails(value: ObjectstorageObjectSourceUriDetails[] | undefined) {
    this._sourceUriDetails = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ObjectstorageObjectTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ObjectstorageObjectTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: this._bucket,
      cache_control: this._cacheControl,
      content: this._content,
      content_disposition: this._contentDisposition,
      content_encoding: this._contentEncoding,
      content_language: this._contentLanguage,
      content_type: this._contentType,
      delete_all_object_versions: this._deleteAllObjectVersions,
      metadata: this._metadata,
      namespace: this._namespace,
      object: this._object,
      source: this._source,
      source_uri_details: this._sourceUriDetails,
      timeouts: this._timeouts,
    };
  }
}
