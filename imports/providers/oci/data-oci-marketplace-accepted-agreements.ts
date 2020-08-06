// https://www.terraform.io/docs/providers/oci/r/data_oci_marketplace_accepted_agreements.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "accepted_agreement_id": {
        "type": "string",
        "optional": true
      },
      "accepted_agreements": {
        "type": [
          "list",
          [
            "object",
            {
              "agreement_id": "string",
              "compartment_id": "string",
              "defined_tags": [
                "map",
                "string"
              ],
              "display_name": "string",
              "freeform_tags": [
                "map",
                "string"
              ],
              "id": "string",
              "listing_id": "string",
              "package_version": "string",
              "signature": "string",
              "time_accepted": "string"
            }
          ]
        ],
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "display_name": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "listing_id": {
        "type": "string",
        "optional": true
      },
      "package_version": {
        "type": "string",
        "optional": true
      }
    },
    "block_types": {
      "filter": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "name": {
              "type": "string",
              "required": true
            },
            "regex": {
              "type": "bool",
              "optional": true
            },
            "values": {
              "type": [
                "list",
                "string"
              ],
              "required": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataOciMarketplaceAcceptedAgreementsConfig extends TerraformMetaArguments {
  readonly acceptedAgreementId?: string;
  readonly compartmentId: string;
  readonly displayName?: string;
  readonly listingId?: string;
  readonly packageVersion?: string;
  /** filter block */
  readonly filter?: DataOciMarketplaceAcceptedAgreementsFilter[];
}
export class DataOciMarketplaceAcceptedAgreementsAcceptedAgreements extends ComplexComputedList {

  // agreement_id - computed: true, optional: false, required: true
  public get agreementId() {
    return this.getStringAttribute('agreement_id');
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: true
  public get definedTags() {
    return 'not implemented' as any;
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public get freeformTags() {
    return 'not implemented' as any;
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // listing_id - computed: true, optional: false, required: true
  public get listingId() {
    return this.getStringAttribute('listing_id');
  }

  // package_version - computed: true, optional: false, required: true
  public get packageVersion() {
    return this.getStringAttribute('package_version');
  }

  // signature - computed: true, optional: false, required: true
  public get signature() {
    return this.getStringAttribute('signature');
  }

  // time_accepted - computed: true, optional: false, required: true
  public get timeAccepted() {
    return this.getStringAttribute('time_accepted');
  }
}
export interface DataOciMarketplaceAcceptedAgreementsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciMarketplaceAcceptedAgreements extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciMarketplaceAcceptedAgreementsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_marketplace_accepted_agreements',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._acceptedAgreementId = config.acceptedAgreementId;
    this._compartmentId = config.compartmentId;
    this._displayName = config.displayName;
    this._listingId = config.listingId;
    this._packageVersion = config.packageVersion;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accepted_agreement_id - computed: false, optional: true, required: false
  private _acceptedAgreementId?: string;
  public get acceptedAgreementId() {
    return this._acceptedAgreementId;
  }
  public set acceptedAgreementId(value: string | undefined) {
    this._acceptedAgreementId = value;
  }

  // accepted_agreements - computed: true, optional: false, required: true
  public acceptedAgreements(index: string) {
    return new DataOciMarketplaceAcceptedAgreementsAcceptedAgreements(this, 'accepted_agreements', index);
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // listing_id - computed: false, optional: true, required: false
  private _listingId?: string;
  public get listingId() {
    return this._listingId;
  }
  public set listingId(value: string | undefined) {
    this._listingId = value;
  }

  // package_version - computed: false, optional: true, required: false
  private _packageVersion?: string;
  public get packageVersion() {
    return this._packageVersion;
  }
  public set packageVersion(value: string | undefined) {
    this._packageVersion = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciMarketplaceAcceptedAgreementsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciMarketplaceAcceptedAgreementsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      accepted_agreement_id: this._acceptedAgreementId,
      compartment_id: this._compartmentId,
      display_name: this._displayName,
      listing_id: this._listingId,
      package_version: this._packageVersion,
      filter: this._filter,
    };
  }
}
