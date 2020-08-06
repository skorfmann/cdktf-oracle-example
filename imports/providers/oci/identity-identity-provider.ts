// https://www.terraform.io/docs/providers/oci/r/identity_identity_provider.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "defined_tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "description": {
        "type": "string",
        "required": true
      },
      "freeform_attributes": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
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
      "inactive_state": {
        "type": "string",
        "computed": true
      },
      "metadata": {
        "type": "string",
        "required": true
      },
      "metadata_url": {
        "type": "string",
        "required": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "product_type": {
        "type": "string",
        "required": true
      },
      "protocol": {
        "type": "string",
        "required": true
      },
      "redirect_url": {
        "type": "string",
        "computed": true
      },
      "signing_certificate": {
        "type": "string",
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "time_created": {
        "type": "string",
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

export interface IdentityIdentityProviderConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly definedTags?: { [key: string]: string };
  readonly description: string;
  readonly freeformAttributes?: { [key: string]: string };
  readonly freeformTags?: { [key: string]: string };
  readonly metadata: string;
  readonly metadataUrl: string;
  readonly name: string;
  readonly productType: string;
  readonly protocol: string;
  /** timeouts block */
  readonly timeouts?: IdentityIdentityProviderTimeouts;
}
export interface IdentityIdentityProviderTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class IdentityIdentityProvider extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: IdentityIdentityProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_identity_identity_provider',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._freeformAttributes = config.freeformAttributes;
    this._freeformTags = config.freeformTags;
    this._metadata = config.metadata;
    this._metadataUrl = config.metadataUrl;
    this._name = config.name;
    this._productType = config.productType;
    this._protocol = config.protocol;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }
  public get definedTags(): { [key: string]: string } | undefined {
    return this._definedTags; // Getting the computed value is not yet implemented
  }
  public set definedTags(value: { [key: string]: string } | undefined) {
    this._definedTags = value;
  }

  // description - computed: false, optional: false, required: true
  private _description: string;
  public get description() {
    return this._description;
  }
  public set description(value: string) {
    this._description = value;
  }

  // freeform_attributes - computed: true, optional: true, required: false
  private _freeformAttributes?: { [key: string]: string }
  public get freeformAttributes(): { [key: string]: string } | undefined {
    return this._freeformAttributes; // Getting the computed value is not yet implemented
  }
  public set freeformAttributes(value: { [key: string]: string } | undefined) {
    this._freeformAttributes = value;
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

  // inactive_state - computed: true, optional: false, required: true
  public get inactiveState() {
    return this.getStringAttribute('inactive_state');
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata: string;
  public get metadata() {
    return this._metadata;
  }
  public set metadata(value: string) {
    this._metadata = value;
  }

  // metadata_url - computed: false, optional: false, required: true
  private _metadataUrl: string;
  public get metadataUrl() {
    return this._metadataUrl;
  }
  public set metadataUrl(value: string) {
    this._metadataUrl = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // product_type - computed: false, optional: false, required: true
  private _productType: string;
  public get productType() {
    return this._productType;
  }
  public set productType(value: string) {
    this._productType = value;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol: string;
  public get protocol() {
    return this._protocol;
  }
  public set protocol(value: string) {
    this._protocol = value;
  }

  // redirect_url - computed: true, optional: false, required: true
  public get redirectUrl() {
    return this.getStringAttribute('redirect_url');
  }

  // signing_certificate - computed: true, optional: false, required: true
  public get signingCertificate() {
    return this.getStringAttribute('signing_certificate');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: IdentityIdentityProviderTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: IdentityIdentityProviderTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      defined_tags: this._definedTags,
      description: this._description,
      freeform_attributes: this._freeformAttributes,
      freeform_tags: this._freeformTags,
      metadata: this._metadata,
      metadata_url: this._metadataUrl,
      name: this._name,
      product_type: this._productType,
      protocol: this._protocol,
      timeouts: this._timeouts,
    };
  }
}
