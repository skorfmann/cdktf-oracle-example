// https://www.terraform.io/docs/providers/oci/r/marketplace_accepted_agreement.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "agreement_id": {
        "type": "string",
        "required": true
      },
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
      "display_name": {
        "type": "string",
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
      "listing_id": {
        "type": "string",
        "required": true
      },
      "package_version": {
        "type": "string",
        "required": true
      },
      "signature": {
        "type": "string",
        "required": true
      },
      "time_accepted": {
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

export interface MarketplaceAcceptedAgreementConfig extends TerraformMetaArguments {
  readonly agreementId: string;
  readonly compartmentId: string;
  readonly definedTags?: { [key: string]: string };
  readonly displayName?: string;
  readonly freeformTags?: { [key: string]: string };
  readonly listingId: string;
  readonly packageVersion: string;
  readonly signature: string;
  /** timeouts block */
  readonly timeouts?: MarketplaceAcceptedAgreementTimeouts;
}
export interface MarketplaceAcceptedAgreementTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class MarketplaceAcceptedAgreement extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: MarketplaceAcceptedAgreementConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_marketplace_accepted_agreement',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._agreementId = config.agreementId;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._listingId = config.listingId;
    this._packageVersion = config.packageVersion;
    this._signature = config.signature;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agreement_id - computed: false, optional: false, required: true
  private _agreementId: string;
  public get agreementId() {
    return this._agreementId;
  }
  public set agreementId(value: string) {
    this._agreementId = value;
  }

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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName ?? this.getStringAttribute('display_name');
  }
  public set displayName(value: string | undefined) {
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

  // listing_id - computed: false, optional: false, required: true
  private _listingId: string;
  public get listingId() {
    return this._listingId;
  }
  public set listingId(value: string) {
    this._listingId = value;
  }

  // package_version - computed: false, optional: false, required: true
  private _packageVersion: string;
  public get packageVersion() {
    return this._packageVersion;
  }
  public set packageVersion(value: string) {
    this._packageVersion = value;
  }

  // signature - computed: false, optional: false, required: true
  private _signature: string;
  public get signature() {
    return this._signature;
  }
  public set signature(value: string) {
    this._signature = value;
  }

  // time_accepted - computed: true, optional: false, required: true
  public get timeAccepted() {
    return this.getStringAttribute('time_accepted');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MarketplaceAcceptedAgreementTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: MarketplaceAcceptedAgreementTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      agreement_id: this._agreementId,
      compartment_id: this._compartmentId,
      defined_tags: this._definedTags,
      display_name: this._displayName,
      freeform_tags: this._freeformTags,
      listing_id: this._listingId,
      package_version: this._packageVersion,
      signature: this._signature,
      timeouts: this._timeouts,
    };
  }
}
