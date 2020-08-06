// https://www.terraform.io/docs/providers/oci/r/functions_function.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "application_id": {
        "type": "string",
        "required": true
      },
      "compartment_id": {
        "type": "string",
        "computed": true
      },
      "config": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "defined_tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "display_name": {
        "type": "string",
        "required": true
      },
      "freeform_tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "image": {
        "type": "string",
        "required": true
      },
      "image_digest": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "invoke_endpoint": {
        "type": "string",
        "computed": true
      },
      "memory_in_mbs": {
        "type": "string",
        "required": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "time_updated": {
        "type": "string",
        "computed": true
      },
      "timeout_in_seconds": {
        "type": "number",
        "optional": true,
        "computed": true
      }
    },
    "block_types": {
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

export interface FunctionsFunctionConfig extends TerraformMetaArguments {
  readonly applicationId: string;
  readonly config?: { [key: string]: string };
  readonly definedTags?: { [key: string]: string };
  readonly displayName: string;
  readonly freeformTags?: { [key: string]: string };
  readonly image: string;
  readonly imageDigest?: string;
  readonly memoryInMbs: string;
  readonly timeoutInSeconds?: number;
  /** timeouts block */
  readonly timeouts?: FunctionsFunctionTimeouts;
}
export interface FunctionsFunctionTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class FunctionsFunction extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: FunctionsFunctionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_functions_function',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._applicationId = config.applicationId;
    this._config = config.config;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._image = config.image;
    this._imageDigest = config.imageDigest;
    this._memoryInMbs = config.memoryInMbs;
    this._timeoutInSeconds = config.timeoutInSeconds;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: false, optional: false, required: true
  private _applicationId: string;
  public get applicationId() {
    return this._applicationId;
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // config - computed: true, optional: true, required: false
  private _config?: { [key: string]: string }
  public get config(): { [key: string]: string } | undefined {
    return this._config; // Getting the computed value is not yet implemented
  }
  public set config(value: { [key: string]: string } | undefined) {
    this._config = value;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }
  public get definedTags(): { [key: string]: string } | undefined {
    return this._definedTags; // Getting the computed value is not yet implemented
  }
  public set definedTags(value: { [key: string]: string } | undefined) {
    this._definedTags = value;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string) {
    this._displayName = value;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }
  public get freeformTags(): { [key: string]: string } | undefined {
    return this._freeformTags; // Getting the computed value is not yet implemented
  }
  public set freeformTags(value: { [key: string]: string } | undefined) {
    this._freeformTags = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // image - computed: false, optional: false, required: true
  private _image: string;
  public get image() {
    return this._image;
  }
  public set image(value: string) {
    this._image = value;
  }

  // image_digest - computed: true, optional: true, required: false
  private _imageDigest?: string;
  public get imageDigest() {
    return this._imageDigest ?? this.getStringAttribute('image_digest');
  }
  public set imageDigest(value: string | undefined) {
    this._imageDigest = value;
  }

  // invoke_endpoint - computed: true, optional: false, required: true
  public get invokeEndpoint() {
    return this.getStringAttribute('invoke_endpoint');
  }

  // memory_in_mbs - computed: false, optional: false, required: true
  private _memoryInMbs: string;
  public get memoryInMbs() {
    return this._memoryInMbs;
  }
  public set memoryInMbs(value: string) {
    this._memoryInMbs = value;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: true
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // timeout_in_seconds - computed: true, optional: true, required: false
  private _timeoutInSeconds?: number;
  public get timeoutInSeconds() {
    return this._timeoutInSeconds ?? this.getNumberAttribute('timeout_in_seconds');
  }
  public set timeoutInSeconds(value: number | undefined) {
    this._timeoutInSeconds = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: FunctionsFunctionTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: FunctionsFunctionTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: this._applicationId,
      config: this._config,
      defined_tags: this._definedTags,
      display_name: this._displayName,
      freeform_tags: this._freeformTags,
      image: this._image,
      image_digest: this._imageDigest,
      memory_in_mbs: this._memoryInMbs,
      timeout_in_seconds: this._timeoutInSeconds,
      timeouts: this._timeouts,
    };
  }
}
