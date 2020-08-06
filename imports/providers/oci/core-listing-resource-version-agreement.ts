// https://www.terraform.io/docs/providers/oci/r/core_listing_resource_version_agreement.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "eula_link": {
        "type": "string",
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
      "listing_resource_version": {
        "type": "string",
        "required": true
      },
      "oracle_terms_of_use_link": {
        "type": "string",
        "computed": true
      },
      "signature": {
        "type": "string",
        "computed": true
      },
      "time_retrieved": {
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

export interface CoreListingResourceVersionAgreementConfig extends TerraformMetaArguments {
  readonly listingId: string;
  readonly listingResourceVersion: string;
  /** timeouts block */
  readonly timeouts?: CoreListingResourceVersionAgreementTimeouts;
}
export interface CoreListingResourceVersionAgreementTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class CoreListingResourceVersionAgreement extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CoreListingResourceVersionAgreementConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_listing_resource_version_agreement',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._listingId = config.listingId;
    this._listingResourceVersion = config.listingResourceVersion;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // eula_link - computed: true, optional: false, required: true
  public get eulaLink() {
    return this.getStringAttribute('eula_link');
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

  // listing_resource_version - computed: false, optional: false, required: true
  private _listingResourceVersion: string;
  public get listingResourceVersion() {
    return this._listingResourceVersion;
  }
  public set listingResourceVersion(value: string) {
    this._listingResourceVersion = value;
  }

  // oracle_terms_of_use_link - computed: true, optional: false, required: true
  public get oracleTermsOfUseLink() {
    return this.getStringAttribute('oracle_terms_of_use_link');
  }

  // signature - computed: true, optional: false, required: true
  public get signature() {
    return this.getStringAttribute('signature');
  }

  // time_retrieved - computed: true, optional: false, required: true
  public get timeRetrieved() {
    return this.getStringAttribute('time_retrieved');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CoreListingResourceVersionAgreementTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: CoreListingResourceVersionAgreementTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      listing_id: this._listingId,
      listing_resource_version: this._listingResourceVersion,
      timeouts: this._timeouts,
    };
  }
}
